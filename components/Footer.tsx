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
                <a href="mailto:admin@surlogicuy.com" className="hover:text-white transition-colors">
                  admin@surlogicuy.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('location')}
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.7 13.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.5.2-.2.3-.3.4-.4.2-.2.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2 0 1.2.9 2.3 1 2.5.1.2 1.8 2.8 4.3 3.9.6.3 1 .5 1.4.6.6.2 1.1.2 1.5.1.5-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.2-.5-.3z" />
                </svg>
                <a href="https://wa.me/59891488400" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +598 91 488 400
                </a>
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="mailto:admin@surlogicuy.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-400/60 bg-blue-500/25 text-blue-50 hover:bg-blue-500/40 transition-colors"
                aria-label={t('ariaEmail')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://wa.me/59891488400"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-emerald-400/60 bg-emerald-500/25 text-emerald-50 hover:bg-emerald-500/40 transition-colors"
                aria-label={t('ariaWhatsapp')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16.7 13.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.2-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.5.2-.2.3-.3.4-.4.2-.2.2-.3.3-.5.1-.2.1-.3 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2 0 1.2.9 2.3 1 2.5.1.2 1.8 2.8 4.3 3.9.6.3 1 .5 1.4.6.6.2 1.1.2 1.5.1.5-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.2-.2-.5-.3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/surlogic_/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-fuchsia-400/60 bg-fuchsia-500/25 text-fuchsia-50 hover:bg-fuchsia-500/40 transition-colors"
                aria-label={t('ariaInstagram')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.5A5.5 5.5 0 1112 18a5.5 5.5 0 010-11zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zm6-2.25a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 7.25z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/surlogicuy/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-sky-400/60 bg-sky-500/25 text-sky-50 hover:bg-sky-500/40 transition-colors"
                aria-label={t('ariaLinkedin')}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.64h.05a3.84 3.84 0 013.46-1.9c3.7 0 4.38 2.43 4.38 5.58V21H16.9v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9.5z" />
                </svg>
              </a>
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
