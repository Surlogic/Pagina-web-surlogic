'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Reveal from '@/components/common/Reveal';

export default function Services() {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;

  const services = [
    {
      key: 'custom',
      title: t('custom.title'),
      description: t('custom.description'),
      link: `/${locale}/servicios/software-a-medida`,
      linkText: t('custom.link'),
      color: 'from-blue-600 to-indigo-500',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      key: 'automation',
      title: t('automation.title'),
      description: t('automation.description'),
      link: `/${locale}/servicios/automatizaciones`,
      linkText: t('automation.link'),
      color: 'from-sky-500 to-blue-500',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      key: 'integrations',
      title: t('integrations.title'),
      description: t('integrations.description'),
      link: `/${locale}/servicios/integraciones`,
      linkText: t('integrations.link'),
      color: 'from-indigo-500 to-blue-500',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
    },
    {
      key: 'applications',
      title: t('applications.title'),
      description: t('applications.description'),
      link: `/${locale}/servicios/aplicaciones`,
      linkText: t('applications.link'),
      color: 'from-cyan-500 to-sky-500',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
  ];

  return (
    <Reveal as="section" className="py-16 sm:py-20 lg:py-24 bg-navy-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-950/70" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-14" delay={100}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {t('badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{t('title')}</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">{t('subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.key} delay={index * 120} className="h-full">
              <Link
                href={service.link}
                className="group relative block w-full h-full p-6 sm:p-8 lg:p-9 rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-blue-400/40 transition-colors"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />

                <div className="relative flex flex-col h-full gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </div>

                  <div className="inline-flex items-center text-sm font-semibold text-white">
                    <span>{service.linkText}</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
