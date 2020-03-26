const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    modules: [
      "react",
      "react-dom"
    ]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "js/[name].js", // usando templates.
    library: "[name]" // gracias a library podremos enlazar de manera global ese js(modules) con nuestro código
  },
  // este plugin exportará el dll
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ],
}