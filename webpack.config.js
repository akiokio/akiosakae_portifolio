var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './app/bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [ 
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react']
            }
          },
        ],
        exclude: /node_modules/,
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        use: ['babel-loader',],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};