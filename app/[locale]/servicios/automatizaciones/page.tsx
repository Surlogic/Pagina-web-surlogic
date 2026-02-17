import { useTranslations } from 'next-intl';

export default function AutomationPage() {
  const t = useTranslations('automation');

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

      {/* Impacto */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('impact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-navy-950/50 rounded-xl border border-blue-800/50 text-center hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-2">{t('impact.metric1.value')}</div>
              <p className="text-gray-300">{t('impact.metric1.label')}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-navy-950/50 rounded-xl border border-blue-800/50 text-center hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-2">{t('impact.metric2.value')}</div>
              <p className="text-gray-300">{t('impact.metric2.label')}</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-900/30 to-navy-950/50 rounded-xl border border-blue-800/50 text-center hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-2">{t('impact.metric3.value')}</div>
              <p className="text-gray-300">{t('impact.metric3.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('process.title')}</h2>
            <p className="text-xl text-gray-400">Metodología probada para entrega de sistemas críticos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">01</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('process.audit.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('process.audit.description')}
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('process.design.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('process.design.description')}
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('process.build.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('process.build.description')}
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">04</div>
                <h3 className="text-xl font-semibold text-white mb-3">{t('process.monitoring.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('process.monitoring.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automatizaciones */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('automations.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.invoicing.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.invoicing.description')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.reporting.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.reporting.description')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.inventory.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.inventory.description')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.notifications.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.notifications.description')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.dataEntry.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.dataEntry.description')}</p>
            </div>
            <div className="p-6 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-white mb-3">{t('automations.compliance.title')}</h3>
              <p className="text-gray-400 text-sm">{t('automations.compliance.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}