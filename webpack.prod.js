const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: {
    main: [
      'normalize.css',
      './src/styles/main.scss',
      './src/client.js',
    ],
  },

  output: {
    path: __dirname,
    publicPath: '/',
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
        use: [ 'babel-loader' ],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false }
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],

}
