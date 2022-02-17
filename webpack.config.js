const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    assetModuleFilename: 'assets/[name][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {

    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        dependency: { not: ['url'] },
        loader: 'file-loader',
        options: {
          publicPath: '../',
          name: 'assets/[name].[ext]',
        },
        type: 'javascript/auto'
      },
      {
        test: /\.html$/,
            use: [
              'raw-loader'
            ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
}