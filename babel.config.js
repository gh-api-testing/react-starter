const path = require('path')

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    ["babel-plugin-module-resolver", {
      root: path.join(__dirname, 'src'),
    }],
  ],
  env: {
    production: {
      plugins: [["babel-plugin-emotion", { hoist: true }]],
    },
    development: {
      plugins: [
        ["babel-plugin-emotion", { sourceMap: true, autoLabel: true }],
        "react-hot-loader/babel",
      ],
    },
  },
}
