import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('integrations.title'),
    description: t('integrations.description'),
    path: `/${params.locale}/servicios/integraciones`,
  });
}

export default async function IntegrationsPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'integrations' });
  const locale = params.locale;

  const challengeKeys = ['item1', 'item2', 'item3', 'item4'] as const;
  const platformKeys = ['erp', 'crm', 'ecommerce', 'payment', 'logistics', 'accounting'] as const;
  const architectureKeys = ['rest', 'webhooks', 'queues', 'etl'] as const;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-center">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-4">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-purple-200 bg-purple-500/10 border border-purple-500/20">
            {t('hero.title')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t('hero.subtitle')}</h1>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">{t('challenges.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challengeKeys.map((key) => (
              <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-lg font-semibold text-white mb-2">{t(`challenges.${key}.title`)}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`challenges.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('platforms.title')}</h3>
            <p className="text-gray-400 text-sm mb-6">{t('platforms.subtitle')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {platformKeys.map((key) => (
                <div key={key} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-200">
                  {t(`platforms.${key}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {architectureKeys.map((key, idx) => (
            <div key={key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-sm text-gray-400 mb-1">0{idx + 1}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{t(`architecture.${key}.title`)}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{t(`architecture.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">{t('approach.title')}</h3>
            <p className="text-gray-400">{t('approach.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['step1', 'step2', 'step3', 'step4'].map((step, idx) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm text-gray-400 mb-1">0{idx + 1}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{t(`approach.${step}.title`)}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{t(`approach.${step}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-500/10 to-indigo-500/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">{t('cta.title')}</h3>
          <p className="text-gray-200">{t('cta.subtitle')}</p>
          <a
            href={`/${locale}/contacto`}
            className="btn-sheen inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg shadow-purple-600/30 hover:translate-y-[-1px] transition-all"
          >
            {t('cta.button')}
          </a>
        </div>
      </section>
    </div>
  );
}
