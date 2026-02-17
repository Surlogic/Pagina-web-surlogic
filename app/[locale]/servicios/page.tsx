import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="pt-20">
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            {t('subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="servicios/software-a-medida" className="group p-10 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400">{t('custom.title')}</h2>
              <p className="text-gray-400">{t('custom.description')}</p>
            </Link>
            
            <Link href="servicios/automatizaciones" className="group p-10 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400">{t('automation.title')}</h2>
              <p className="text-gray-400">{t('automation.description')}</p>
            </Link>
            
            <Link href="servicios/integraciones" className="group p-10 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400">{t('integrations.title')}</h2>
              <p className="text-gray-400">{t('integrations.description')}</p>
            </Link>
            
            <Link href="servicios/aplicaciones" className="group p-10 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600 transition-all">
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400">{t('applications.title')}</h2>
              <p className="text-gray-400">{t('applications.description')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
