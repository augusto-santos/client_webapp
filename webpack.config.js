const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './build/scripts/main.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: './bundle.js'
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
          presets: ['es2015'] 
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./style.css',{
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['.js', '.es6']
  },
}