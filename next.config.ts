/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
      },
    ],
  },
}

module.exports = nextConfig
