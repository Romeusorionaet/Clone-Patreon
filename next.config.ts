/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c14.patreon.com',
      },
    ],
  },
}

module.exports = nextConfig
