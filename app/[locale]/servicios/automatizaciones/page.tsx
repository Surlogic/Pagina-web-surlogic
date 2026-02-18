import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('automation.title'),
    description: t('automation.description'),
    path: `/${params.locale}/servicios/automatizaciones`,
  });
}

export default async function AutomationPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'automation' });
  const nav = await getTranslations({ locale: params.locale, namespace: 'nav' });
  const locale = params.locale;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {nav('services')}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">{t('hero.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{t(`impact.metric${i}.value`)}</div>
              <p className="text-gray-300 text-sm">{t(`impact.metric${i}.label`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white">{t('automations.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['invoicing', 'reporting', 'inventory', 'notifications', 'dataEntry', 'compliance'].map((key) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h4 className="text-lg font-semibold text-white mb-2">{t(`automations.${key}.title`)}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`automations.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {['audit', 'design', 'build', 'monitoring'].map((step, idx) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm text-gray-400 mb-1">0{idx + 1}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{t(`process.${step}.title`)}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{t(`process.${step}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600/10 to-indigo-600/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">{t('cta.title')}</h3>
          <p className="text-gray-200">{t('cta.subtitle')}</p>
          <a
            href={`/${locale}/contacto`}
            className="btn-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
