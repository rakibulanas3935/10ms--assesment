import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['cdn.10minuteschool.com','s3.ap-southeast-1.amazonaws.com'],
  },
};
 
export default withNextIntl(nextConfig);