/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cloudflare-ipfs.com']
  }
}

module.exports = nextConfig
