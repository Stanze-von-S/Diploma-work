const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
		index: './src/index.js', 
		about: './src/about.js'
	},

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: "babel-loader" }, 
      exclude: /node_modules/
        },
        {
      test: /\.css$/,
      use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 
        'css-loader', 
        'postcss-loader'] 
        },
        {
      test: /\.(png|jpg|gif|ico|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]',
            esModule: false
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            preset: ['default'],
          }
        }
      ]        
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=./vendor/[name].[ext]'
        }
      ]
    },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: false, 
      template: 'src/index.html',
      filename: 'index.html',
      favicon: 'src/images/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: 'src/about.html', 
      filename: 'about.html',
      favicon: 'src/images/favicon.ico'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}