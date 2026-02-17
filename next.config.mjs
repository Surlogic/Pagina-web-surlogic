import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: "export",   // 👈 habilita static export

  images: {
    domains: [],
    unoptimized: true // 👈 obligatorio en static export
  }
};

export default withNextIntl(nextConfig);
