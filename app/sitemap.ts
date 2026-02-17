import { MetadataRoute } from 'next';
import { locales } from '@/lib/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://surlogic.com';

const paths = [
  '',
  '/servicios',
  '/servicios/software-a-medida',
  '/servicios/automatizaciones',
  '/servicios/integraciones',
  '/servicios/aplicaciones',
  '/casos-de-exito',
  '/nosotros',
  '/contacto',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const urls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    paths.forEach((path) => {
      urls.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
      });
    });
  });

  return urls;
}
