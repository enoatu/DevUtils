const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const isProd = process.env.NODE_ENV == 'production'
module.exports = {
  basePath: isProd ? '/DevUtils' : '', // for github-pages subdir
  resolve: {
    alias: {
      '@': './src'
    }
  },
  webpack(config, options) {
    // typecheckする
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    return config
  }
}

