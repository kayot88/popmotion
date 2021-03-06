var webpack = require('webpack');
var path = require('path');
var isProd = (process.env.NODE_ENV === 'production');
var devTool = isProd ? false : 'inline-source-map';

module.exports = {
  entry: {
    global: './lib/global.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'popmotion-pose.js'
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./lib')
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true
    })
  ]
};