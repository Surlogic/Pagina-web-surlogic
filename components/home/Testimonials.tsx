'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      content: t('item1.content'),
      name: t('item1.name'),
      position: t('item1.position'),
      company: t('item1.company'),
      initials: 'MG',
    },
    {
      content: t('item2.content'),
      name: t('item2.name'),
      position: t('item2.position'),
      company: t('item2.company'),
      initials: 'CM',
    },
    {
      content: t('item3.content'),
      name: t('item3.name'),
      position: t('item3.position'),
      company: t('item3.company'),
      initials: 'AS',
    },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20">
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500 hover-lift"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-purple-500/10 group-hover:text-purple-500/20 transition-colors">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                {/* Avatar placeholder */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  <p className="text-blue-400 text-xs mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
