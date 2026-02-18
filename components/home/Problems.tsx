'use client';

import { useTranslations } from 'next-intl';
import Reveal from '@/components/common/Reveal';

export default function Problems() {
  const t = useTranslations('problems');

  const problems = [
    {
      title: t('item1.title'),
      description: t('item1.description'),
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
    {
      title: t('item2.title'),
      description: t('item2.description'),
      gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t('item3.title'),
      description: t('item3.description'),
      gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      title: t('item4.title'),
      description: t('item4.description'),
      gradient: 'from-cyan-500/20 via-sky-500/10 to-transparent',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  return (
    <Reveal as="section" className="py-16 sm:py-20 lg:py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-14" delay={100}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {t('badge')}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 text-balance">{t('title')}</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">{t('subtitle')}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {problems.map((problem, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="relative group rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8 overflow-hidden hover:border-blue-400/40 transition-colors">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${problem.gradient}`} />

                <div className="relative space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-blue-200 group-hover:scale-105 transition-transform">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{problem.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
