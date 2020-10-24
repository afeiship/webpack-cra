const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {
  override,
  addDecoratorsLegacy,
  addWebpackPlugin,
  addWebpackAlias
} = require('customize-cra');

const customizeOverride = () => (config) => {
  return config;
};

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': resolve(__dirname, 'src')
  }),
  customizeOverride(),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator'
    })
  ),
  addWebpackPlugin(
    new CopyWebpackPlugin([
      {
        from: './src/assets/fallback.js',
        to: '.'
      }
    ])
  )
);
