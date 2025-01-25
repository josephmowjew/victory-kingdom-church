/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure we're using webpack
  experimental: {
    turbo: false
  }
}

module.exports = nextConfig 