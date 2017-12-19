const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
})
