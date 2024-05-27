/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md/,
      use: "raw-loader",
    });
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ['img.shields.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
    ],
  },
};

module.exports = nextConfig;
