/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    return [
      {
        source: '/map',
        destination: 'https://maps.app.goo.gl/ZTAFWpB5CHpfRAsx5?g_st=iw',
        permanent: true
      },
    ]
  },
};

module.exports = nextConfig;
