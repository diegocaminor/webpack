const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname),
    filename: "budle.js"
  }
}

// lo anterior reemplaza a 
// npx webpack --entry ./index.js --output ./bundle.js --mode development