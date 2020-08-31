let webpack = require('webpack');
let path = require('path');
let ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let BUIL_DIR = path.join(__dirname, 'dist');
let APP_DIR = path.join(__dirname, 'src');

let config = {
  entry: {
    bundle: APP_DIR + '/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/'
          }
        }]
      },
    ],
  },
  devServer: {
    contentBase: BUIL_DIR,
    compress: true,
    port: 9000,
    disableHostCheck: false,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App MMES Search Products',
      filename: 'index.html',
      template: 'public/index.html',
    }),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
        },
      },
    },
  },
};

module.exports = config;