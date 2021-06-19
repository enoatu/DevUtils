const isProd = process.env.NODE_ENV == 'production'
module.exports = {
  basePath: isProd ? '/DevUtils' : '', // for github-pages subdir
}
