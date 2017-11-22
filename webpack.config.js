const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './build/scripts/main.js',
  output: {
    path: __dirname + '/dist',
    filename: './scripts/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 8000,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'] 
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.scss$/,
        loader: "autoprefixer-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./styles/style.css',{
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: 'build/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'build/assets',
        to: 'assets'
      }
    ])
  ],
  resolve: {
    extensions: ['.js', '.es6']
  },
}