/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "https://maksymkopych.github.io/Portfolio/",
        destination: "https://portfolio.maksymkopych.vercel.app/",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
