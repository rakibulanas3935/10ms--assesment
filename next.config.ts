import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['cdn.10minuteschool.com'],
  },
};
 
export default withNextIntl(nextConfig);