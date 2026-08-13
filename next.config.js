/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mitesuplementos.com.br',
          },
        ],
        destination: 'https://mitesuplementos.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
