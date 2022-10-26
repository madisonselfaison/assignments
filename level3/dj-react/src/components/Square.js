import React from "react"

export default function Square(props){
    console.log("props in square: ", props)
    return(
        <div className={`boxa ${props.class}`} style={{backgroundColor:props.color}}>
            
        </div>
    )
}