'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xrbzvkay', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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

      {/* Formulario y Sidebar */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-navy-950/50 rounded-2xl border border-navy-800 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_to" value="admin@surlogicuy.com" />
                  <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all"
                    >
                      <option value="">{t('form.service')}</option>
                      <option value="custom">{t('form.serviceCustom')}</option>
                      <option value="automation">{t('form.serviceAutomation')}</option>
                      <option value="integration">{t('form.serviceIntegration')}</option>
                      <option value="app">{t('form.serviceApp')}</option>
                      <option value="consulting">{t('form.serviceConsulting')}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-600/50"
                  >
                    {status === 'sending' ? 'Enviando...' : t('form.submit')}
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-400 text-center">
                      ✓ Mensaje enviado correctamente. Te contactaremos pronto.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-400 text-center">
                      Error al enviar. Intenta nuevamente o escribe a admin@surlogicuy.com
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div>
              <div className="bg-navy-950/50 rounded-2xl border border-navy-800 p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-8">{t('info.title')}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">{t('info.email')}</h4>
                    <a href="mailto:admin@surlogicuy.com" className="text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      admin@surlogicuy.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Ubicación</h4>
                    <p className="text-white flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Montevideo, Uruguay
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">{t('info.schedule')}</h4>
                    <p className="text-white">{t('info.scheduleTime')}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">{t('info.response')}</h4>
                    <p className="text-white">{t('info.responseTime')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Inicio */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('process.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('process.step1.title')}</h3>
              <p className="text-gray-400 text-sm">{t('process.step1.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('process.step2.title')}</h3>
              <p className="text-gray-400 text-sm">{t('process.step2.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{t('process.step3.title')}</h3>
              <p className="text-gray-400 text-sm">{t('process.step3.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}