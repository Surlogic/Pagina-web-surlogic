import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';
import { ContactForm } from '@/components/contact/ContactForm';

type PageProps = { params: { locale: 'es' | 'en' | 'pt' } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  return createMetadata({
    locale: params.locale,
    title: t('contact.title'),
    description: t('contact.description'),
    path: `/${params.locale}/contacto`,
  });
}

export default async function ContactPage({ params }: PageProps) {
  unstable_setRequestLocale(params.locale);
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });
  const nav = await getTranslations({ locale: params.locale, namespace: 'nav' });

  const infoStrings = {
    title: t('info.title'),
    email: t('info.email'),
    location: t('info.location'),
    locationValue: t('info.locationValue'),
    schedule: t('info.schedule'),
    scheduleTime: t('info.scheduleTime'),
    response: t('info.response'),
    responseTime: t('info.responseTime'),
    whatsapp: t('info.whatsapp'),
  };

  const process = [
    t('process.step1.description'),
    t('process.step2.description'),
    t('process.step3.description'),
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center space-y-6">
          <p className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20">
            {nav('contact')}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">{t('hero.title')}</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12">
          <div className="bg-navy-950/60 border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <p className="text-sm text-gray-400">{t('process.title')}</p>
            </div>

            <ContactForm
              strings={{
                name: t('form.name'),
                email: t('form.email'),
                company: t('form.company'),
                phone: t('form.phone'),
                service: t('form.service'),
                serviceSelect: t('form.serviceSelect'),
                serviceCustom: t('form.serviceCustom'),
                serviceAutomation: t('form.serviceAutomation'),
                serviceIntegration: t('form.serviceIntegration'),
                serviceApp: t('form.serviceApp'),
                serviceConsulting: t('form.serviceConsulting'),
                message: t('form.message'),
                submit: t('form.submit'),
                sending: t('form.sending'),
                success: t('form.success'),
                error: t('form.error'),
                whatsapp: t('info.whatsapp'),
                whatsappMessage: t('form.whatsappMessage'),
              }}
            />
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white text-xl font-semibold mb-3">{infoStrings.title}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 w-28">{infoStrings.email}</span>
                  <a href="mailto:admin@surlogicuy.com" className="text-white hover:text-blue-300 transition-colors">
                    admin@surlogicuy.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 w-28">{infoStrings.location}</span>
                  <span className="text-white">{infoStrings.locationValue}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 w-28">{infoStrings.schedule}</span>
                  <span className="text-white">{infoStrings.scheduleTime}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gray-400 w-28">{infoStrings.response}</span>
                  <span className="text-white">{infoStrings.responseTime}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 p-6">
              <h4 className="text-white font-semibold mb-2">{t('process.title')}</h4>
              <ol className="space-y-2 text-gray-200 text-sm list-decimal list-inside">
                {process.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
