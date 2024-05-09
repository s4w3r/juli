import React from "react";
import "./style/card.css"

function Hi(props){

return(
    <div>
        <h1>
            Hola, soy un {props.username}
        </h1>
    </div>

)

}

export default Hi