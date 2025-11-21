/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Production optimization disable 
    domains: ['boganto.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boganto.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;