const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const DotenvWebpackPlugin = require('dotenv-webpack')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean)
            }
          },
        ],
      },
      /**
       * For loading CSS in dependencies.
       */
      /*
      {
        test: /\.css$/,
        include: /\/node_modules\/(react-datepicker)\//,
        loader: [
          'to-string-loader',
          'css-loader',
        ],
      },
      */
    ],
  },
  plugins: [
    new DotenvWebpackPlugin(),
    new HtmlWebpackPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  devtool: 'source-map',
  devServer: {
    hot: true,
    overlay: true,
    host: '0.0.0.0',
    port: 8080,
    //historyApiFallback: true,
  },
}
