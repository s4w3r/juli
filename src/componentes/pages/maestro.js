import React from "react";
import Card from "../card";
import Hi from "../saludo";
import bingo from '../image/Bingo.webp';
import bluey from '../image/bluey.webp';
import mick from '../image/mick.webp'
import Iteracion from "../ltinerante";
import Boton from "../boton";

export default class Maestro extends React.Component{
        constructor(props){
            super(props)
            this.state={
                data:[{
                    "id": 1,
                    "nombre":"Bingo",
                    "descripcion": "Es una perrita bonita naranjita",
                    "img": bingo

                },
                {
                    "id": 2,
                    "nombre":"Bluey",
                    "descripcion": "Es una perrita bonita azul",
                    "img": bluey
            },
            {
                "id": 3,
                "nombre":"Micky",
                "descripcion": "Micky mouse jo joi",
                "img": mick
        
            }]
            }
        }
    render(){
       return(
        <div>
            <Iteracion
                chao ={this.state.data}
                />
            <Hi
                username = "Bingo"            
            />
            <Boton/>
        </div>
       )
    }
}