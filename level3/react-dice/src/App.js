import React from "react"
import DiceBox from "./components/DiceBox"

export default function App(props){
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1
  }

  const rollDice = () => { 
    setNumbers ((prevNumbers) => {
      return prevNumbers.map(num => generateRandomNumber())
    })
  }
  const listOfNumbers = numbers.map(num => <DiceBox number={num} />)

  return(
    <div>
      <h1>React Dice</h1>
      <DiceBox />
      {listOfNumbers}
      <button className="button" onClick = {rollDice}>Roll Dice</button>
    </div>
  )
}
