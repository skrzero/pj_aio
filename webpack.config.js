const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;
const LicensePlugin = require('webpack-license-plugin');

// Détection des modes
const isProduction = process.env.NODE_ENV === 'production';
const isWatch = process.argv.includes('--watch');

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: {
    theme: ['./assets/scripts/base.js', './assets/styles/base.scss'],
  },

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js',
  },

  resolve: {
    preferRelative: true,
  },

  stats: isWatch ? 'errors-only' : { children: true },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          minify: isProduction, // JS minifié uniquement en prod
          target: 'es2015',
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(png|woff2?|eot|otf|ttf|svg|jpe?g|gif)(\?[a-z0-9=\.]+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'dist/css/[hash][ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('..', 'css', '[name].css'),
    }),

    // Minification CSS uniquement en production
    ...(isProduction ? [new CssoWebpackPlugin({ forceMediaMerge: true })] : []),

    new LicensePlugin({
      outputFilename: 'thirdPartyNotice.json',
      licenseOverrides: {
        'bootstrap-touchspin@3.1.1': 'Apache-2.0',
      },
      replenishDefaultLicenseTexts: true,
    }),
  ],

  optimization: isProduction
    ? {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: false,
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
      }
    : {
        minimize: false,
      },
};
