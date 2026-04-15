import type { Metadata } from 'next';
import './globals.css';

const siteName = 'SurLogic';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://surlogic.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Enterprise Software Solutions`,
    template: `%s | ${siteName}`,
  },
  description: 'Partner tecnológico para empresas que requieren soluciones críticas de alto impacto.',
  icons: {
    icon: '/brand/favicon-round.png?v=2',
    shortcut: '/brand/favicon-round.png?v=2',
    apple: '/brand/favicon-round.png?v=2',
  },
  openGraph: {
    siteName,
    type: 'website',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-navy-950">
        {children}
      </body>
    </html>
  );
}
