import React from "react";
import Card from "./card";

export default function Iteracion(props){
    return(
        <div>
           {
               props.chao.map((chao)=>{
                   return(
                       <Card
                       nombre={chao.nombre}
                       descripcion={chao.descripcion}
                       img={chao.img}
                       
                       />

                       
                   )
               })
           }
               

        </div>
   )
}