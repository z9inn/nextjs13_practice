/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/z9inn",
        destination: "/about/me/z9inn",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
