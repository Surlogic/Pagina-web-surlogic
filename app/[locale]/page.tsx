import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Problems from '@/components/home/Problems';
import Services from '@/components/home/Services';
import Methodology from '@/components/home/Methodology';
import Trust from '@/components/home/Trust';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

type PageProps = {
  params: { locale: 'es' | 'en' | 'pt' };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return createMetadata({
    locale: params.locale,
    title: 'SurLogic — Enterprise Software Solutions',
    description: 'Software a medida, automatización e integraciones críticas para empresas en crecimiento.',
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
      <Testimonials />
      <CTA />
    </>
  );
}
