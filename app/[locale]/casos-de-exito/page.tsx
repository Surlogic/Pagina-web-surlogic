import Link from 'next/link';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Testimonials from '@/components/home/Testimonials';

type PageProps = {
  params: { locale: 'es' | 'en' | 'pt' };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('caseStudies.title'),
    description: t('caseStudies.description'),
    path: `/${params.locale}/casos-de-exito`,
  });
}

export default async function CaseStudiesPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'caseStudies' });
  const cases = ['case1', 'case2', 'case3'] as const;
  const showContent = false;
  const cardSurface = 'border border-white/8 bg-white/[0.03]';
  const wip = {
    badge: t('wipBadge'),
    title: t('wipTitle'),
    subtitle: t('wipSubtitle'),
    label: t('wipLabel'),
    body: t('wipBody'),
    result: t('wipResult'),
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {showContent ? t('hero.badge') : wip.badge}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            {showContent ? t('hero.title') : wip.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {showContent ? t('hero.subtitle') : wip.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          {cases.map((key, idx) => (
            <div
              key={key}
              className={`rounded-2xl ${cardSurface} overflow-hidden transition-colors hover:border-blue-400/40`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr]">
                <div className="p-8 md:p-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {showContent ? t(`${key}.industry`) : wip.label}
                    </span>
                    <span className="text-xs text-gray-400">
                      {showContent ? t('caseNumber', { current: idx + 1, total: cases.length }) : wip.label}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {showContent ? t(`${key}.client`) : wip.label}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {showContent ? t(`${key}.challengeText`) : wip.body}
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
                      {showContent ? t(`${key}.solution`) : wip.label}
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {showContent ? t(`${key}.solutionText`) : wip.body}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-white/5">
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    {showContent ? t(`${key}.results`) : wip.label}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className={`rounded-xl ${cardSurface} px-4 py-4 text-sm text-white/90`}
                      >
                        {showContent ? t(`${key}.result${n}`) : wip.result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-6">
            {showContent ? (
              <Link
                href={`/${params.locale}/contacto`}
                className="btn-sheen inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
              >
                {t('otherCta.button')}
              </Link>
            ) : (
              <div
                aria-hidden="true"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 shadow-lg shadow-blue-700/30 min-w-[220px]"
              />
            )}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
