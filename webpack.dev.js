const join = require('path').join
const webpack = require('webpack')

module.exports = {

  entry: {
    main: [
      'webpack-hot-middleware/client',
      'normalize.css',
      './src/styles/main.scss',
      './src/client.js',
    ],
  },

  devtool: 'inline-source-map',

  output: {
    path: join(__dirname, 'assets'),
    publicPath: '/assets/',
    filename: '[name].js',
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.css', '.scss' ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'react-hot-loader', 'babel-loader' ],
      },
      {
        test: /\.(scss|css)$/,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ],
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

}
