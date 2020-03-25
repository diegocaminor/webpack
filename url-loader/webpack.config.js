const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname,"src/js/index.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "js/[name].js" // usando templates
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader", // Intercepta los archivos de js y transpila en versiones más antiguas que entiendan la mayoría de los navegadores
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 900000, // si la imagen no pasa los 9bytes entonces devolverá un archivo base64, sino creará uno
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack-dev-server",
      template: path.resolve(__dirname,"index.html")
    }),
  ]
}