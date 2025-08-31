/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MAS_API_URL: process.env.MAS_API_URL || 'https://api-mas.cyberellum.technology',
    MAS_API_KEY: process.env.MAS_API_KEY || 'sk-super-secret-key-12345',
  },
  async rewrites() {
    return [
      {
        source: '/api/mas/:path*',
        destination: `${process.env.MAS_API_URL || 'https://api-mas.cyberellum.technology'}/:path*`,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/mas/:path*',
        headers: [
          {
            key: 'x-api-key',
            value: process.env.MAS_API_KEY || 'sk-super-secret-key-12345',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig