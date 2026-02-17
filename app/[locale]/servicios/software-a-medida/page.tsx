import { useTranslations } from 'next-intl';

export default function CustomSoftwarePage() {
  const t = useTranslations('customSoftware');

  return (
    <div className="pt-20">
      {/* Hero */}
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

      {/* Beneficios */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t('benefits.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('benefits.item1.title')}</h3>
              <p className="text-gray-400">{t('benefits.item1.description')}</p>
            </div>
            <div className="group p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('benefits.item2.title')}</h3>
              <p className="text-gray-400">{t('benefits.item2.description')}</p>
            </div>
            <div className="group p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('benefits.item3.title')}</h3>
              <p className="text-gray-400">{t('benefits.item3.description')}</p>
            </div>
            <div className="group p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('benefits.item4.title')}</h3>
              <p className="text-gray-400">{t('benefits.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('approach.title')}</h2>
            <p className="text-xl text-gray-400">{t('approach.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">01</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('approach.discovery.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('approach.discovery.description')}
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('approach.architecture.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('approach.architecture.description')}
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('approach.development.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('approach.development.description')}
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">04</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('approach.delivery.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('approach.delivery.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('useCases.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.erp')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.crm')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.inventory')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.workflow')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.analytics')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-lg border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <p className="text-gray-300">{t('useCases.compliance')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}