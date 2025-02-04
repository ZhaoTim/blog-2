/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
});

module.exports = withNextra({
  ...nextConfig,
});
