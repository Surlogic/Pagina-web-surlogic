import { useTranslations } from 'next-intl';
import Hero from '@/components/home/Hero';
import Problems from '@/components/home/Problems';
import Services from '@/components/home/Services';
import Methodology from '@/components/home/Methodology';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Methodology />
      <Testimonials />
      <CTA />
    </>
  );
}