import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.surlogicuy.com';
const locales = ['es', 'en', 'pt'] as const;

type Locale = (typeof locales)[number];

interface MetadataProps {
  locale: Locale;
  title: string;
  description: string;
  path: string; // should include the locale prefix, e.g. /es/contacto
  image?: string;
}

export function createMetadata({ locale, title, description, path, image }: MetadataProps): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = image || `${siteUrl}/og-default.jpg`;

  const alternateLanguages = Object.fromEntries(
    locales.map((loc) => [loc, path.replace(/^\/(es|en|pt)/, `/${loc}`)])
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternateLanguages,
    },
    openGraph: {
      title,
      description,
      url,
      locale,
      siteName: 'SurLogic',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export { locales };
