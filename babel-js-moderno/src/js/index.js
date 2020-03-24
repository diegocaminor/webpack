import "../css/index.css"
import search from "./search"
import render from "./render"
const id = prompt("Quién es ese pokemon?");

search(id)
  .then((data)=> {
    render(data)
  })
  .catch(()=> {
    console.log("no hubo pokemon");
  })

// repaso de las dependencias de babel:
// babel-loader va a entender todos los archivos .js y se los va a pasar a babel/core, que va a cambiar el formato de js moderno a js que yo le diga, y el js que queremos es la tercer dependencia
// babel/preset-env