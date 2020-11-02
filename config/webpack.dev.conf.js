const path = require('./path')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.build,
    open: true,
    compress: true,
    hot: true,
    port: 5000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
