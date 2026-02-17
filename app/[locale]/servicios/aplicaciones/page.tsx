import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return createMetadata({
    locale: params.locale,
    title: 'SurLogic — Enterprise Applications',
    description: 'Aplicaciones web y móviles enfocadas en productividad, performance y UX.',
    path: `/${params.locale}/servicios/aplicaciones`,
  });
}

export default async function ApplicationsPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'applications' });
  const locale = params.locale;

  const focusKeys = ['ux', 'performance', 'security', 'reliability'] as const;
  const typeKeys = ['web', 'mobile', 'pwa'] as const;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-amber-200 bg-amber-500/10 border border-amber-500/20">
            {t('hero.title')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('hero.subtitle')}</h1>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusKeys.map((key, idx) => (
            <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm text-gray-400 mb-1">0{idx + 1}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{t(`focus.${key}.title`)}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{t(`focus.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white">{t('types.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {typeKeys.map((key) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-lg font-semibold text-white mb-1">{t(`types.${key}.title`)}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{t(`types.${key}.description`)}</p>
                <p className="text-gray-400 text-xs">{t(`types.${key}.tech`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">{t('stack.title')}</h3>
            <p className="text-gray-300 text-sm mb-4">{t('stack.description')}</p>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>{t('stack.frontend')}</li>
              <li>{t('stack.backend')}</li>
              <li>{t('stack.mobile')}</li>
              <li>{t('stack.cloud')}</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">{t('approach.title')}</h3>
            <div className="space-y-3 text-gray-200 text-sm">
              {['step1', 'step2', 'step3', 'step4'].map((step, idx) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{t(`approach.${step}.title`)}</p>
                    <p className="text-gray-300">{t(`approach.${step}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">{t('cta.title')}</h3>
          <p className="text-gray-200">{t('cta.subtitle')}</p>
          <a
            href={`/${locale}/contacto`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-amber-600/30 hover:translate-y-[-1px] transition-all"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
