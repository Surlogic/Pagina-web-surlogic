import { useTranslations } from 'next-intl';

export default function IntegrationsPage() {
  const t = useTranslations('integrations');

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

      {/* Desafíos */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t('challenges.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('challenges.item1.title')}</h3>
              <p className="text-gray-400">{t('challenges.item1.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('challenges.item2.title')}</h3>
              <p className="text-gray-400">{t('challenges.item2.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('challenges.item3.title')}</h3>
              <p className="text-gray-400">{t('challenges.item3.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('challenges.item4.title')}</h3>
              <p className="text-gray-400">{t('challenges.item4.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('platforms.title')}</h2>
            <p className="text-xl text-gray-400">{t('platforms.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">ERP</h3>
              <p className="text-gray-300">{t('platforms.erp')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">CRM</h3>
              <p className="text-gray-300">{t('platforms.crm')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">E-commerce</h3>
              <p className="text-gray-300">{t('platforms.ecommerce')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Payment</h3>
              <p className="text-gray-300">{t('platforms.payment')}, dLocal</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Logistics</h3>
              <p className="text-gray-300">{t('platforms.logistics')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Accounting</h3>
              <p className="text-gray-300">{t('platforms.accounting')}, Zeta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestro Enfoque</h2>
            <p className="text-xl text-gray-400">Metodología probada para entrega de sistemas críticos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">01</div>
                <h3 className="text-xl font-semibold text-white mb-3">Análisis Estratégico</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Evaluamos objetivos de negocio, mapeo de procesos y definición de arquitectura óptima
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">Desarrollo Ágil</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implementación iterativa con entregas continuas y validación constante de resultados
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">Testing Riguroso</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pruebas exhaustivas de funcionalidad, rendimiento, seguridad e integración
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">04</div>
                <h3 className="text-xl font-semibold text-white mb-3">Deploy y Soporte</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implementación controlada y mantenimiento proactivo para garantizar operación continua
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('architecture.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-2">{t('architecture.rest.title')}</h3>
              <p className="text-gray-400 text-sm">{t('architecture.rest.description')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-2">{t('architecture.webhooks.title')}</h3>
              <p className="text-gray-400 text-sm">{t('architecture.webhooks.description')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-2">{t('architecture.messageQueues.title')}</h3>
              <p className="text-gray-400 text-sm">{t('architecture.messageQueues.description')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 text-center transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-2">{t('architecture.etl.title')}</h3>
              <p className="text-gray-400 text-sm">{t('architecture.etl.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}