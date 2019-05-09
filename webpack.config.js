const path = require('path');
const webpack = require('webpack');
const package = require('./package');

module.exports = {
  entry: './src/junits.ts',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'junits.js',
    library: 'jUnits',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules', 'src']
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', include: /src/ },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ]
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: `junits v${package.version}`
    })
  ],

  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'docs'),
  }
};
