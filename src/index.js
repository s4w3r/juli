import React from "react";
import ReactDOM from "react-dom"

const nombre = 'Julian'
const user ={
    Nombre: 'Julian',
    Apellido:'Rey',
    Edad: 20
  
}
const element = <h1>Hello, {user.Nombre+''+ user.Nombre+''+ user.Edad}</h1>

const contenedor = document.getElementById('root')

ReactDOM.render(element,contenedor)