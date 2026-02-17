import { useTranslations } from 'next-intl';

export default function ApplicationsPage() {
  const t = useTranslations('applications');

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

      {/* Pilares */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t('pillars.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('pillars.ux.title')}</h3>
              <p className="text-gray-400">{t('pillars.ux.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('pillars.performance.title')}</h3>
              <p className="text-gray-400">{t('pillars.performance.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('pillars.security.title')}</h3>
              <p className="text-gray-400">{t('pillars.security.description')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-semibold text-white mb-3">{t('pillars.reliability.title')}</h3>
              <p className="text-gray-400">{t('pillars.reliability.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-navy-950">
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
                <h3 className="text-xl font-semibold text-white mb-3">Discovery Profundo</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Inmersión en sus operaciones actuales, identificación de cuellos de botella y definición de objetivos medibles
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">02</div>
                <h3 className="text-xl font-semibold text-white mb-3">Diseño de Arquitectura</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Definición de stack tecnológico, patrones de diseño y estructura modular escalable
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">03</div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementación Iterativa</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sprints con entregas funcionales, validación constante y ajustes en tiempo real
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="group relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
              <div className="pt-8">
                <div className="text-7xl font-bold text-blue-900 mb-4">04</div>
                <h3 className="text-xl font-semibold text-white mb-3">Deploy Controlado</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Migración sin downtime, capacitación de usuarios y documentación técnica completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('types.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('types.web.title')}</h3>
              <p className="text-gray-400 mb-4">{t('types.web.description')}</p>
              <p className="text-sm text-blue-400">{t('types.web.tech')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('types.mobile.title')}</h3>
              <p className="text-gray-400 mb-4">{t('types.mobile.description')}</p>
              <p className="text-sm text-blue-400">{t('types.mobile.tech')}</p>
            </div>
            <div className="p-8 bg-navy-950/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-2xl font-semibold text-white mb-4">{t('types.pwa.title')}</h3>
              <p className="text-gray-400 mb-4">{t('types.pwa.description')}</p>
              <p className="text-sm text-blue-400">{t('types.pwa.tech')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{t('stack.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
              <p className="text-gray-300 text-sm">{t('stack.frontend')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Backend</h3>
              <p className="text-gray-300 text-sm">{t('stack.backend')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Mobile</h3>
              <p className="text-gray-300 text-sm">{t('stack.mobile')}</p>
            </div>
            <div className="p-6 bg-navy-900/50 rounded-xl border border-navy-800 hover:border-blue-600/50 transition-all duration-300 hover-lift">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Cloud</h3>
              <p className="text-gray-300 text-sm">{t('stack.cloud')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}