const path = require('path');

module.exports = {
  entry: './src/junit.ts',

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'junit.js',
    library: 'jUnit',
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

  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'docs'),
  }
};
