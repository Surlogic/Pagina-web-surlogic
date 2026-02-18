'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LogoMark from '@/components/brand/LogoMark';

export default function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale as string;
  const stages = [t('stageDiscovery'), t('stageArchitecture'), t('stageSprints'), t('stageLaunch')];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 pt-24">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.22),transparent_30%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t('badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              {t('title')}
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/contacto`}
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
              >
                {t('cta')}
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/casos-de-exito`}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/15 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                {t('ctaSecondary')}
              </Link>
            </div>

          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-6 w-40 h-40 text-blue-400/25 animate-logo-drift pointer-events-none">
              <LogoMark className="w-full h-full animate-logo-reveal" />
            </div>
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-blue-900/30 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold">{t('snapshotTitle')}</div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                  {t('slaBadge')}
                </span>
              </div>

              <div className="space-y-4">
                {stages.map((stage, i) => (
                  <div key={stage} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-300">
                      <span>{stage}</span>
                      <span className="text-gray-500">{t('weekLabel', { number: i + 1 })}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-400"
                        style={{ width: `${25 * (i + 1)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-gray-400">{t('metricCostLabel')}</div>
                  <div className="text-xl font-semibold text-white">-70%</div>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="text-xs text-gray-400">{t('metricProjectLabel')}</div>
                  <div className="text-xl font-semibold text-white">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
