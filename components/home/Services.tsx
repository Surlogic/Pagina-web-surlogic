'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Services() {
  const t = useTranslations('services');
  const params = useParams();
  const locale = params.locale as string;

  const services = [
    {
      title: t('custom.title'),
      description: t('custom.description'),
      link: `/${locale}/servicios/software-a-medida`,
      linkText: t('custom.link'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      color: 'blue',
      gradient: 'from-blue-600/20 via-blue-500/10 to-transparent',
    },
    {
      title: t('automation.title'),
      description: t('automation.description'),
      link: `/${locale}/servicios/automatizaciones`,
      linkText: t('automation.link'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      color: 'cyan',
      gradient: 'from-cyan-600/20 via-cyan-500/10 to-transparent',
    },
    {
      title: t('integrations.title'),
      description: t('integrations.description'),
      link: `/${locale}/servicios/integraciones`,
      linkText: t('integrations.link'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      ),
      color: 'purple',
      gradient: 'from-purple-600/20 via-purple-500/10 to-transparent',
    },
    {
      title: t('applications.title'),
      description: t('applications.description'),
      link: `/${locale}/servicios/aplicaciones`,
      linkText: t('applications.link'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      color: 'emerald',
      gradient: 'from-emerald-600/20 via-emerald-500/10 to-transparent',
    },
  ];

  const colorMap: Record<string, { icon: string; border: string; text: string }> = {
    blue: { icon: 'text-blue-400', border: 'group-hover:border-blue-500/40', text: 'text-blue-400' },
    cyan: { icon: 'text-cyan-400', border: 'group-hover:border-cyan-500/40', text: 'text-cyan-400' },
    purple: { icon: 'text-purple-400', border: 'group-hover:border-purple-500/40', text: 'text-purple-400' },
    emerald: { icon: 'text-emerald-400', border: 'group-hover:border-emerald-500/40', text: 'text-emerald-400' },
  };

  return (
    <section className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20">
            Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <Link
                key={index}
                href={service.link}
                className={`group relative p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] ${colors.border} transition-all duration-500 hover-lift overflow-hidden`}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-6 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className={`flex items-center ${colors.text} font-medium`}>
                    <span>{service.linkText}</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
