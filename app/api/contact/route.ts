import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const requiredEnv = ['GMAIL_USER', 'GMAIL_APP_PASSWORD'] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxLengths = {
  name: 120,
  email: 254,
  company: 120,
  phone: 50,
  service: 120,
  message: 5000,
} as const;

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

function normalizeString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function normalizePayload(payload: Record<string, unknown>): ContactPayload {
  return {
    name: normalizeString(payload.name),
    email: normalizeString(payload.email),
    company: normalizeString(payload.company),
    phone: normalizeString(payload.phone),
    service: normalizeString(payload.service),
    message: normalizeString(payload.message),
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, ' ').trim();
}

function validatePayload(payload: ContactPayload) {
  const required = ['name', 'email', 'company', 'service', 'message'] as const;
  for (const key of required) {
    if (!payload[key] || payload[key].trim().length === 0) {
      return `Missing field: ${key}`;
    }
  }

  if (!emailPattern.test(payload.email)) {
    return 'Invalid email format';
  }

  for (const [key, maxLength] of Object.entries(maxLengths) as Array<
    [keyof ContactPayload, number]
  >) {
    if (payload[key].length > maxLength) {
      return `Field too long: ${key}`;
    }
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const rawBody = (await request.json()) as unknown;
    if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
      return NextResponse.json({ ok: false, error: 'Invalid payload' }, { status: 400 });
    }

    const body = normalizePayload(rawBody as Record<string, unknown>);
    const errorMessage = validatePayload(body);
    if (errorMessage) {
      return NextResponse.json({ ok: false, error: errorMessage }, { status: 400 });
    }

    for (const key of requiredEnv) {
      if (!process.env[key]) {
        return NextResponse.json(
          { ok: false, error: `Missing environment variable: ${key}` },
          { status: 500 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const safeName = escapeHtml(body.name);
    const safeEmail = escapeHtml(body.email);
    const safeCompany = escapeHtml(body.company);
    const safePhone = escapeHtml(body.phone || '-');
    const safeService = escapeHtml(body.service);
    const safeMessage = escapeHtml(body.message).replace(/\n/g, '<br/>');

    const mailHtml = `
      <h2>Nuevo contacto desde SurLogic</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Empresa:</strong> ${safeCompany}</p>
      <p><strong>Teléfono:</strong> ${safePhone}</p>
      <p><strong>Servicio:</strong> ${safeService}</p>
      <p><strong>Mensaje:</strong><br/>${safeMessage}</p>
    `;

    await transporter.sendMail({
      from: `SurLogic Contacto <${process.env.GMAIL_USER}>`,
      to: 'admin@surlogicuy.com',
      replyTo: sanitizeHeader(body.email),
      subject: sanitizeHeader(`Nuevo contacto: ${body.name} (${body.company})`),
      html: mailHtml,
      text: [
        'Nuevo contacto desde SurLogic',
        `Nombre: ${body.name}`,
        `Email: ${body.email}`,
        `Empresa: ${body.company}`,
        `Teléfono: ${body.phone || '-'}`,
        `Servicio: ${body.service}`,
        '',
        'Mensaje:',
        body.message,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
