import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"], // Add the domain to the array
  },
  eslint: {
    ignoreDuringBuilds: true, // This will disable ESLint during builds
  },
};

export default nextConfig;
