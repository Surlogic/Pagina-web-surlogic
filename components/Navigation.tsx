'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LogoMark from '@/components/brand/LogoMark';

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locales = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/servicios`, label: t('services') },
    { href: `/${locale}/casos-de-exito`, label: t('caseStudies') },
    { href: `/${locale}/nosotros`, label: t('about') },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-navy-950/90 via-navy-950/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white group"
          >
            <span className="w-8 h-8 text-blue-200 group-hover:text-blue-100 transition-colors">
              <LogoMark className="w-full h-full" />
            </span>
            <span className="tracking-tight text-white group-hover:text-white transition-colors">
              SurLogic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={`/${locale}/contacto`}
              className="btn-sheen ml-3 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-700/30 hover:translate-y-[-1px] transition-all duration-200"
            >
              {t('cta')}
            </Link>

            {/* Language switcher */}
            <div className="flex items-center ml-4 pl-4 border-l border-white/[0.08] gap-1">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={`/${loc.code}`}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 ${
                    locale === loc.code
                      ? 'bg-white/[0.12] text-white border border-white/20'
                      : 'text-gray-500 hover:text-gray-200 hover:bg-white/[0.05]'
                  }`}
                >
                  {loc.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors"
            aria-label={t('menuLabel')}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="px-6 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-200 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={`/${locale}/contacto`}
              onClick={() => setIsOpen(false)}
              className="btn-sheen block px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-center rounded-lg shadow-lg shadow-blue-700/20 font-semibold"
            >
              {t('cta')}
            </Link>

            <div className="flex gap-2 pt-5 mt-5 border-t border-white/[0.06]">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={`/${loc.code}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex-1 px-4 py-2 text-sm rounded-lg text-center ${
                    locale === loc.code
                      ? 'bg-white/[0.1] text-white border border-white/15'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {loc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
