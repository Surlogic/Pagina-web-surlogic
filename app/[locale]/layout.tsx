import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const locales = ['es', 'en', 'pt'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
