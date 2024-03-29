/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.mediafire.com"
      }
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
