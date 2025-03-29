/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

