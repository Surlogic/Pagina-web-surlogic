import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { createMetadata, locales } from '@/lib/metadata';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: (typeof locales)[number] };
}

export function generateMetadata({ params }: LayoutProps): Metadata {
  return createMetadata({
    locale: params.locale,
    title: 'SurLogic — Enterprise Software Solutions',
    description: 'Soluciones de software empresarial, automatizaciones e integraciones para operaciones críticas.',
    path: `/${params.locale}`,
  });
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation locale={locale} />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
