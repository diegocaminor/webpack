import "../css/index.css"
import text from "./text"

text();

if(module.hot) {
  module.hot.accept("./text.js", function() {
    console.log("He recargado en caliente");
    text();
  });
}

// repaso de las dependencias de babel:
// babel-loader va a entender todos los archivos .js y se los va a pasar a babel/core, que va a cambiar el formato de js moderno a js que yo le diga, y el js que queremos es la tercer dependencia
// babel/preset-env