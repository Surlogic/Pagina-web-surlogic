import Link from 'next/link';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type PageProps = {
  params: { locale: 'es' | 'en' | 'pt' };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return createMetadata({
    locale: params.locale,
    title: 'SurLogic — Case Studies',
    description: 'Casos reales de transformación digital con impacto medible.',
    path: `/${params.locale}/casos-de-exito`,
  });
}

export default async function CaseStudiesPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'caseStudies' });
  const cases = ['case1', 'case2', 'case3'] as const;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 mb-6">
            KPI-Driven Delivery
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
          {cases.map((key, idx) => (
            <div
              key={key}
              className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr]">
                <div className="p-8 md:p-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                      {t(`${key}.industry`)}
                    </span>
                    <span className="text-xs text-gray-400">Case {idx + 1}/3</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{t(`${key}.client`)}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{t(`${key}.challengeText`)}</p>

                  <div className="mt-6 space-y-2">
                    <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
                      {t(`${key}.solution`)}
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm">{t(`${key}.solutionText`)}</p>
                  </div>
                </div>

                <div className="p-8 md:p-10 bg-white/5">
                  <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                    {t(`${key}.results`)}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className="rounded-xl border border-white/10 bg-navy-950/60 px-4 py-4 text-sm text-white/90"
                      >
                        {t(`${key}.result${n}`)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center pt-6">
            <Link
              href={`/${params.locale}/contacto`}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
            >
              {t('otherCta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
