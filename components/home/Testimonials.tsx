'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const showContent = false;
  const cardSurface = 'border border-white/8 bg-white/[0.03]';
  const wip = {
    badge: t('wipBadge'),
    title: t('wipTitle'),
    subtitle: t('wipSubtitle'),
    content: t('wipContent'),
    name: t('wipName'),
    position: t('wipPosition'),
    company: t('wipCompany'),
    initials: t('wipInitials'),
  };

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
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 to-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium text-purple-200 bg-purple-500/10 border border-purple-500/20">
            {showContent ? t('badge') : wip.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {showContent ? t('title') : wip.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {showContent ? t('subtitle') : wip.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl ${cardSurface} hover:border-white/15 transition-colors`}
            >
              <div className="absolute top-6 right-6 text-purple-500/10 group-hover:text-purple-400/20 transition-colors">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              <p className="text-gray-200 mb-6 leading-relaxed">
                {showContent ? `“${testimonial.content}”` : wip.content}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {showContent ? testimonial.initials : wip.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {showContent ? testimonial.name : wip.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {showContent ? testimonial.position : wip.position}
                  </p>
                  <p className="text-blue-300 text-xs mt-0.5">
                    {showContent ? testimonial.company : wip.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
