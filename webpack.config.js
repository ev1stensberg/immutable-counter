const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'

module.exports = env => {
  return {
    entry: {
      app: './app.js',
      vender: ['lodash']
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval',
    bail: env.prod,
    module: {
      loaders: [
        {test: /\.js$/, loader:'babel?presets[]=es2015,presets[]=stage-2,presets[]=react'}
     ]
    },
    plugins: [
      env.test ? undefined : new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
}
}
