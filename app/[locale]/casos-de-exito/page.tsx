'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CaseStudiesPage() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Casos de Éxito
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Proyectos que transformaron operaciones empresariales
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-navy-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Próximamente
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Estamos documentando nuestros casos de éxito más recientes. Pronto compartiremos los resultados y el impacto generado en nuestros clientes.
            </p>
            <Link
              href={`/${locale}/contacto`}
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Consulta tu Proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}