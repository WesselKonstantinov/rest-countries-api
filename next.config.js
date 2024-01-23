/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "restcountries.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
