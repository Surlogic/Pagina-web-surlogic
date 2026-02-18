'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Reveal from '@/components/common/Reveal';

export default function CTA() {
  const t = useTranslations('cta');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <Reveal as="section" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-navy-950 to-purple-900/20" />
      <div className="absolute inset-0 bg-navy-950/60" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href={`/${locale}/contacto`}
            className="group btn-sheen inline-flex items-center px-10 py-5 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t('button')}
            <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <p className="text-sm text-gray-500">{t('note')}</p>
        </div>
      </div>
    </Reveal>
  );
}
