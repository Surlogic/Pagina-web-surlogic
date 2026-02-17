import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Contact submission:', body);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
