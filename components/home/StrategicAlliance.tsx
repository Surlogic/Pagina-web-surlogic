'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Reveal from '@/components/common/Reveal';

const benefits = ['benefit1', 'benefit2', 'benefit3'] as const;

export default function StrategicAlliance() {
  const t = useTranslations('strategicAlliance');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <Reveal as="section" className="relative overflow-hidden bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-navy-950 to-emerald-900/10" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr,0.92fr] lg:gap-14">
          <Reveal className="space-y-6" delay={100}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {t('badge')}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white text-balance sm:text-3xl md:text-5xl">
                {t('title')}
              </h2>
              <p className="max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {t('subtitle')}
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              <p>{t('paragraph1')}</p>
              <p>{t('paragraph2')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{t('statementTitle')}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">{t('statement')}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-gray-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                  {t(benefit)}
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/contacto`}
              className="group btn-sheen inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-700/25 transition-all hover:translate-y-[-1px] sm:w-auto"
            >
              {t('cta')}
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={220}>
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur sm:p-6">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-400/20 opacity-70" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
                    {t('visualBadge')}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-emerald-300/30" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr,auto,1fr] sm:items-center">
                  <div className="flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                    <Image
                      src="/brand/surlogic-alliance-logo.png"
                      alt={t('surlogicAlt')}
                      width={220}
                      height={220}
                      className="h-auto w-36 sm:w-40"
                    />
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-navy-900 text-lg font-semibold text-blue-100">
                      x
                    </div>
                  </div>

                  <Link
                    href="https://hammerconsult.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('hammerLinkLabel')}
                    className="group flex min-h-40 items-center justify-center rounded-2xl border border-white/10 bg-white p-6 transition-colors hover:border-emerald-300/60"
                  >
                    <Image
                      src="/brand/hammer-consult-logo.png"
                      alt={t('hammerAlt')}
                      width={220}
                      height={220}
                      className="h-auto w-36 transition-transform group-hover:scale-[1.02] sm:w-40"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
