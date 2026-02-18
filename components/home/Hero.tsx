'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import LogoMark from '@/components/brand/LogoMark';
import CountUp from '@/components/common/CountUp';

export default function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale as string;
  const stages = [t('stageDiscovery'), t('stageArchitecture'), t('stageSprints'), t('stageLaunch')];
  const logoParallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = logoParallaxRef.current;
    if (!element) return;

    let raf = 0;
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 400);
        const x = -offset * 0.05;
        const y = offset * 0.08;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        raf = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 pt-20 sm:pt-24 lg:pt-20 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.22),transparent_30%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 lg:py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-200 animate-fade-in-up"
              style={{ animationDelay: '50ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              {t('badge')}
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance animate-fade-in-up"
              style={{ animationDelay: '140ms' }}
            >
              {t('title')}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: '220ms' }}
            >
              {t('subtitle')}
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-lg animate-fade-in-up"
              style={{ animationDelay: '280ms' }}
            >
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-gray-400">{t('metricCostLabel')}</div>
                <div className="text-2xl font-semibold text-white">
                  <CountUp end={70} prefix="-" suffix="%" />
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-xs text-gray-400">{t('metricProjectLabel')}</div>
                <div className="text-2xl font-semibold text-white">
                  <CountUp end={1} />
                </div>
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '360ms' }}
            >
              <Link
                href={`/${locale}/contacto`}
                className="group btn-sheen inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
              >
                {t('cta')}
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>

          <div className="relative">
            <div
              ref={logoParallaxRef}
              className="absolute -top-16 -right-16 sm:-top-20 sm:-right-24 lg:-top-28 lg:-right-20 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[32rem] lg:h-[32rem] pointer-events-none"
            >
              <div className="animate-logo-hero">
                <LogoMark className="w-full h-full opacity-[0.15] sm:opacity-20 animate-logo-reveal logo-hero-glow" />
              </div>
            </div>
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-indigo-500/20" />
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 shadow-2xl shadow-blue-900/30 backdrop-blur">
              <div className="flex items-center justify-between mb-6">
                <div className="text-white font-semibold">{t('snapshotTitle')}</div>
                <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
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
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 progress-bar"
                        style={{
                          ['--bar-width' as string]: `${25 * (i + 1)}%`,
                          animationDelay: `${200 + i * 140}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
