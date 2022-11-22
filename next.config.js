module.exports = nextConfig = {
  reactStrictMode: true,
  env: {
    development: true,
  },
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/first-post',
  //       destination: '/posts/first-post',
  //     },
  //   ];
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/first-post',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
}
