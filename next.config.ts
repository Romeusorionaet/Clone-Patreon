/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c14.patreon.com',
      },
      {
        protocol: 'https',
        hostname: 'c5.patreon.com',
      },
      {
        protocol: 'https',
        hostname: 'apps.apple.com',
      },
    ],
  },
}

module.exports = nextConfig
