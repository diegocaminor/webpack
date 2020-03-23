const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  }
}

// lo anterior reemplaza a 
// npx webpack --entry ./index.js --output ./bundle.js --mode development