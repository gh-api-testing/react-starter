const path = require('path')

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    "babel-plugin-emotion",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-optional-chaining",
    ["babel-plugin-module-resolver", {
      root: path.join(__dirname, 'src'),
    }],
  ],
}
