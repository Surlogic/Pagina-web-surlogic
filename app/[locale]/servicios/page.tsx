import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('services.title'),
    description: t('services.description'),
    path: `/${params.locale}/servicios`,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });
  const locale = params.locale;

  const cards = [
    {
      key: 'custom',
      href: `/${locale}/servicios/software-a-medida`,
      title: t('custom.title'),
      description: t('custom.description'),
    },
    {
      key: 'automation',
      href: `/${locale}/servicios/automatizaciones`,
      title: t('automation.title'),
      description: t('automation.description'),
    },
    {
      key: 'integrations',
      href: `/${locale}/servicios/integraciones`,
      title: t('integrations.title'),
      description: t('integrations.description'),
    },
    {
      key: 'applications',
      href: `/${locale}/servicios/aplicaciones`,
      title: t('applications.title'),
      description: t('applications.description'),
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 mb-6">
            {t('badge')}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-400/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                  {card.title}
                </h2>
                <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 flex items-center justify-center">
                  →
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
