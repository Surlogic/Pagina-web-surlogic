'use client';

import { useTranslations } from 'next-intl';
import Reveal from '@/components/common/Reveal';

export default function Methodology() {
  const t = useTranslations('methodology');

  const steps = [
    { title: t('step1.title'), description: t('step1.description'), label: '01' },
    { title: t('step2.title'), description: t('step2.description'), label: '02' },
    { title: t('step3.title'), description: t('step3.description'), label: '03' },
    { title: t('step4.title'), description: t('step4.description'), label: '04' },
  ];

  return (
    <Reveal as="section" className="py-16 sm:py-20 lg:py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-14" delay={100}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {t('badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{t('title')}</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">{t('subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 120}>
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 overflow-hidden hover:border-blue-400/40 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400">{t('stepLabel', { number: step.label })}</span>
                  <span className="text-sm text-blue-200 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {t('slaReady')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
