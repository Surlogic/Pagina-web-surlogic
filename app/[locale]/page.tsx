import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Problems from '@/components/home/Problems';
import Services from '@/components/home/Services';
import Methodology from '@/components/home/Methodology';
import Trust from '@/components/home/Trust';
import CTA from '@/components/home/CTA';

type PageProps = {
  params: { locale: 'es' | 'en' | 'pt' };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('home.title'),
    description: t('home.description'),
    path: `/${params.locale}`,
  });
}

export default function HomePage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Methodology />
      <Trust />
      <CTA />
    </>
  );
}
