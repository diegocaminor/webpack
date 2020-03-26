const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname,"src/js/index.js"),
    contact: path.resolve(__dirname,"src/js/contact.js"),
  },
  mode: "production",
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
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader"
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // aplicará con todos
      minSize: 0, // ¿Cuál es el tamaño mínimo que tienen que tener mis chunks para que sean considerados y meterlos al commons?
      name: 'commons' // así se llamará el módulo donde se exportará el código que se repita en todas las páginas, commons es por convención
    }
  }
}