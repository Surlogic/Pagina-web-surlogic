'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params.locale as string;

  const metrics = [
    { value: t('metric1'), label: t('metric1Label') },
    { value: t('metric2'), label: t('metric2Label') },
    { value: t('metric3'), label: t('metric3Label') },
    { value: t('metric4'), label: t('metric4Label') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-950 pt-20 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.08] rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/[0.06] rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/[0.04] rounded-full blur-[140px]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-blue-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm text-blue-400 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Enterprise Software Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-fade-in text-balance">
            {t('title')}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-delay">
            <Link
              href={`/${locale}/contacto`}
              className="group px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('cta')}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href={`/${locale}/casos-de-exito`}
              className="group px-8 py-4 rounded-xl text-white text-lg font-semibold glass-light hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t('ctaSecondary')}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Metrics bar */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden glass">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 text-center hover:bg-white/[0.02] transition-colors duration-300 ${
                  index < metrics.length - 1 ? 'border-r border-white/[0.06]' : ''
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-blue mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  );
}
