/* eslint-disable */
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["@"] = path.join(__dirname, "src");
    }

    return config;
  },
};

module.exports = nextConfig;
