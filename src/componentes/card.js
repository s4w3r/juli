import React from "react";
import bingo from "./image/bingo.jpg";
import "./style/card.css"



class Card extends React.Component{

    render(){
    const {nombre,edad,color}=this.props
        return (
        <div className="card back">
         <div className="font">
            <h1 style={{color:`${color}`}}>Hola, {nombre} tu edad es {edad}.</h1>
         </div>
         <div >
            <img src={bingo} className="porta" alt=""/>
         </div>
        </div>
    )
      
}
}

export default Card