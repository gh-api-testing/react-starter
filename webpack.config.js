const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'app',
      //baseHref: 'https://your.site',
      devServer: 'http://0.0.0.0:8080',
      mobile: true,
      links: [
        'https://fonts.googleapis.com/css?family=Lato:400,500,600,700',
      ],
      inlineManifestWebpackName: 'webpackManifest',
      title: 'My App',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    overlay: true,
    host: '0.0.0.0',
  },
}
