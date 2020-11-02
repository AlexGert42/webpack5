
const path = require('./path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [`${path.src}/index.js`],
  output: {
    path: path.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.public,
    //       to: 'assets',
    //       // globOptions: {
    //       //   // ignore: ['*.DS_Store'],
    //       // },
    //     },
    //   ],
    // }),

    new HtmlWebpackPlugin({
      favicon: `${path.src}/img/favicon.png`,
      template: `${path.src}/template.html`,
      filename: 'index.html'
    }),
  ],

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
    ],
  },
}
