import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy-950/50 rounded-2xl border border-navy-800 p-12">
            <h2 className="text-3xl font-bold text-white mb-6">{t('vision.title')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{t('vision.text')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{t('values.item1.title')}</h3>
              <p className="text-gray-400">{t('values.item1.description')}</p>
            </div>
            <div className="p-8 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{t('values.item2.title')}</h3>
              <p className="text-gray-400">{t('values.item2.description')}</p>
            </div>
            <div className="p-8 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{t('values.item3.title')}</h3>
              <p className="text-gray-400">{t('values.item3.description')}</p>
            </div>
            <div className="p-8 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3">{t('values.item4.title')}</h3>
              <p className="text-gray-400">{t('values.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-navy-950/50 rounded-2xl border border-navy-800 p-12">
            <h2 className="text-3xl font-bold text-white mb-6">{t('approach.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{t('approach.item1')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{t('approach.item2')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{t('approach.item3')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{t('approach.item4')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{t('approach.item5')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy-900/50 rounded-2xl border border-navy-800 p-12">
            <h2 className="text-3xl font-bold text-white mb-6">{t('expertise.title')}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Equipo especializado en desarrollo de sistemas empresariales críticos, trabajando con empresas de logística, manufactura, retail, servicios financieros y tecnología en proyectos de transformación digital de alto impacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}