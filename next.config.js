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
  sassOptions: {
    additionalData: `
      @import "styles/variables.sass"
      @import "styles/mixins.sass"
    `
  }
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
