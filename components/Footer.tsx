'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <footer className="bg-navy-950 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-blue-400">Sur</span>
              <span>Logic</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">{t('description')}</p>

            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                admin@surlogicuy.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('location')}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 8.5l10 6 10-6M4 18h16a2 2 0 002-2V8M4 18a2 2 0 01-2-2V8m2 10l6-6m-8-4l10 6 10-6" />
                </svg>
                WhatsApp: +598 91 488 400
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={`/${locale}/servicios/software-a-medida`} className="text-gray-400 hover:text-white transition-colors">
                  {t('customSoftware')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/automatizaciones`} className="text-gray-400 hover:text-white transition-colors">
                  {t('automations')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/integraciones`} className="text-gray-400 hover:text-white transition-colors">
                  {t('integrations')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/aplicaciones`} className="text-gray-400 hover:text-white transition-colors">
                  {t('applications')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href={`/${locale}/nosotros`} className="text-gray-400 hover:text-white transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/casos-de-exito`} className="text-gray-400 hover:text-white transition-colors">
                  {t('caseStudies')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-gray-400 hover:text-white transition-colors">
                  {t('contactLink')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800/60 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SurLogic. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
