import React from "react";
import "./style/card.css"
/* import img from '../componentes/image/Bingo.webp'; */


class Card extends React.Component{
/*     constructor(props){
        super(props)
        this.state={
            nimage:'https://i.pinimg.com/736x/dc/cb/e7/dccbe770e822e1f4f7337aba88548f09.jpg'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                nimage:img
            })
        },3000)
    } */
    render(){
    const {nombre,descripcion,img}=this.props
        return (
        <div className="card back">
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <img src={img} className="porta" alt=""/>
        </div>
        
    )
      
}
}

export default Card