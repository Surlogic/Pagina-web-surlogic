'use client';

import { useTranslations } from 'next-intl';

export default function Trust() {
  const t = useTranslations('trust');

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: '.NET', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Data' },
    { name: 'MongoDB', category: 'Data' },
    { name: 'Redis', category: 'Data' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'GraphQL', category: 'API' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
  ];

  return (
    <section className="py-20 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-400">{t('subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-gray-300 hover:border-blue-500/30 hover:text-white hover:bg-blue-500/5 transition-all duration-300 cursor-default"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
