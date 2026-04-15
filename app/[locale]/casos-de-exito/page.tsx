import Link from 'next/link';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

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
  const cardSurface = 'border border-white/8 bg-white/[0.03]';

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {t('hero.badge')}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            {t('hero.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-8">
          <details open className={`rounded-2xl ${cardSurface} overflow-hidden transition-colors hover:border-blue-400/40`}>
            <summary className="list-none cursor-pointer p-6 md:p-8 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {t('caseCard.badge')}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
                    {t('mariaCarissima.client')}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2 max-w-3xl">
                    {t('mariaCarissima.summary')}
                  </p>
                </div>
                <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-blue-100 bg-blue-500/10 border border-blue-500/20 w-fit">
                  {t('caseCard.cta')}
                </span>
              </div>
            </summary>

            <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr]">
              <div className="p-8 md:p-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {t('mariaCarissima.industry')}
                  </span>
                  <span className="text-xs font-semibold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {t('mariaCarissima.appType')}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-2">
                      {t('mariaCarissima.challenge')}
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {t('mariaCarissima.challengeText')}
                    </p>
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
                      {t('mariaCarissima.solution')}
                    </div>
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {t('mariaCarissima.solutionText')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 bg-white/5 border-t border-white/10 md:border-t-0 md:border-l md:border-white/10">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3">
                  {t('mariaCarissima.scope')}
                </div>
                <ul className="space-y-2 text-sm text-gray-200">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <li key={n} className={`rounded-xl ${cardSurface} px-4 py-3`}>
                      {t(`mariaCarissima.scopeItem${n}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={`rounded-none md:rounded-b-2xl ${cardSurface} p-8 md:p-10 bg-gradient-to-r from-navy-950 to-navy-900 border-t border-white/10`}>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t('mariaCarissima.impactTitle')}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {t('mariaCarissima.impactText')}
              </p>
            </div>
          </details>

          <div className="text-center pt-6">
            <Link
              href={`/${params.locale}/contacto`}
              className="btn-sheen inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
            >
              {t('otherCta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
