import React from "react";
import ReactDOM from "react-dom/client";
import App from './componentes/App';

const root = ReactDOM.createRoot(

  document.getElementById('root')

)

root.render(
  <App/>
)





/* const user ={
    Nombre: 'Julian',
    Apellido:'Rey',
    Edad: 20,
    avatar: 'https://i.pinimg.com/736x/66/30/83/66308353adca12827d25d96e60ae3fd6.jpg'  
}

function name(user) {
   return user.Nombre +''+ user.Apellido +''+ user.Edad
} 


const element =(
  <div>
   <h1>Hello, {name(user)}</h1>
   <img src={user.avatar}/>
  </div>
) */