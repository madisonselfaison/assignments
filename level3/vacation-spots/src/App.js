import react from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data"
import "./styles.css"

export default function App() {

  const cards = data.map(item => {
    return(
      <Card
          key={item.id}
          place={item.place}
          price={item.price}
          timeToGo={item.timeToGo}
          pricePoint={item.pricePoint}
          />
    )
  })
  return (
      <div>
        <Header />
        {cards}
      </div>
  )
}