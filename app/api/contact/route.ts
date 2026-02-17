import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const requiredEnv = ['GMAIL_USER', 'GMAIL_APP_PASSWORD'] as const;

function validatePayload(payload: Record<string, string>) {
  const required = ['name', 'email', 'company', 'service', 'message'] as const;
  for (const key of required) {
    if (!payload[key] || payload[key].trim().length === 0) {
      return `Missing field: ${key}`;
    }
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;
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

    const mailHtml = `
      <h2>Nuevo contacto desde SurLogic</h2>
      <p><strong>Nombre:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Empresa:</strong> ${body.company}</p>
      <p><strong>Teléfono:</strong> ${body.phone || '-'}</p>
      <p><strong>Servicio:</strong> ${body.service}</p>
      <p><strong>Mensaje:</strong><br/>${body.message}</p>
    `;

    await transporter.sendMail({
      from: `SurLogic Contacto <${process.env.GMAIL_USER}>`,
      to: 'admin@surlogicuy.com',
      replyTo: body.email,
      subject: `Nuevo contacto: ${body.name} (${body.company})`,
      html: mailHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
