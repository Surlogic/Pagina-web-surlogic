'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-blue-500">Sur</span>Logic
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              {t('description')}
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                admin@surlogicuy.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Montevideo, Uruguay
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/servicios/software-a-medida`} className="text-gray-400 hover:text-white transition-colors">
                  Software a Medida
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/automatizaciones`} className="text-gray-400 hover:text-white transition-colors">
                  Automatización
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/integraciones`} className="text-gray-400 hover:text-white transition-colors">
                  Integraciones
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/servicios/aplicaciones`} className="text-gray-400 hover:text-white transition-colors">
                  Aplicaciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('company')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/nosotros`} className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/casos-de-exito`} className="text-gray-400 hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SurLogic. {t('rights')}.</p>
        </div>
      </div>
    </footer>
  );
}