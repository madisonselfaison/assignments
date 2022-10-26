import React from "react"
import Square from "./Square"
import wav from "../assets/yay-6326.mp3"

export default function Boxes() {
    const [squares, setSquares] = React.useState(["white", "blue", "yellow", "green"])

    function handleClick (){
        if(squares[0] === "white"){
            setSquares(["black", "black", "black", "black"])
        }
        else {
            setSquares(["white", "white", "white", "white"])
        }
    }
    function party (){
        setSquares((prevState) => {
            /// any code can go here 
            return ["purple", "purple", prevState[2], prevState[3]]
        })
    }
    function leftBlue (){
        setSquares((prevState) =>{
            return [prevState[0], prevState[1], "blue", prevState[3]]
    
        })
    }
    function rightBlue (){
        setSquares((prevState) =>{
            return [prevState[0], prevState[1], prevState[2], "blue"]
        })
    }
    function bigOne (){
        setSquares((prevState) =>{
            return ["green", prevState[1], prevState[2], prevState[3]]
        })
    }
    function bigTwo (){
        setSquares((prevState) =>{
            return [prevState[0], "yellow", prevState[2], prevState[3]]
        })
    }
    function bigThree () {
        setSquares((prevState) => {
            return[prevState[0], prevState[1], "teal", prevState[3]]
        })
    }
    function bigFour (){
        setSquares((prevState) => {
            return[prevState[0], prevState[1], prevState[2], "pink"]
        })
    }
   function noise (){
    new Audio(wav).play();
   }

    return(
    <div className="main">
            <h1 className="title">DJ REACT</h1>
        <div className="wrapper">
            <Square color={squares[0]}/>
            <Square color={squares[1]}/>
            <Square color={squares[2]} class={"boxc"}/>
            <Square color={squares[3]}/>
         
                <div className="buttons">
                    <button className="djSmall" onClick = {handleClick}>DJ SMALL</button>
                    <button className="djParty" onClick = {party}>DJ PARTY</button>
                    <button className="leftBlue" onClick = {leftBlue}>LEFT BLUE</button>
                    <button className="rightBlue" onClick = {rightBlue}>RIGHT BLUE</button>
                    <button className="bigOne" onClick = {bigOne}>BIG DJ ONE</button>
                    <button className="bigTwo" onClick = {bigTwo}>BIG DJ TWO</button>
                    <button className="bigThree" onClick = {bigThree}>BIG DJ THREE</button>
                    <button className="bigFour" onClick = {bigFour}>BIG DJ FOUR</button>
                    <button className="noise" onClick = {noise}>MAKE NOISE</button>
                    <audio><source src={wav} type="audio/mp3"/></audio>
                </div>
        </div>
    </div>
    )
}