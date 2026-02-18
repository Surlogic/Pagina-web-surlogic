import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('about.title'),
    description: t('about.description'),
    path: `/${params.locale}/nosotros`,
  });
}

export default async function AboutPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'about' });

  const values = [
    { title: t('values.excellence.title'), description: t('values.excellence.description') },
    { title: t('values.results.title'), description: t('values.results.description') },
    { title: t('values.transparency.title'), description: t('values.transparency.description') },
    { title: t('values.partnership.title'), description: t('values.partnership.description') },
  ];

  const approach = [
    t('approach.item1'),
    t('approach.item2'),
    t('approach.item3'),
    t('approach.item4'),
    t('approach.item5'),
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-6">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {t('hero.subtitle')}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">{t('hero.title')}</h1>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold text-white mb-3">{t('vision.title')}</h2>
            <p className="text-gray-300 leading-relaxed">{t('vision.text')}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-8">
            <h2 className="text-2xl font-semibold text-white mb-3">{t('expertise.title')}</h2>
            <p className="text-gray-200 leading-relaxed">{t('expertise.text')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">{t('values.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white">{t('approach.title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {approach.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="w-8 h-8 rounded-full bg-blue-500/15 text-blue-200 flex items-center justify-center font-semibold">
                  {idx + 1}
                </span>
                <p className="text-gray-200 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
