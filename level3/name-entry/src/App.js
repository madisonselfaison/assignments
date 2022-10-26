import React from "react"
import Form from "./components/Form"
import Badge from "./components/Badge"

export default function App(props){
  const [badgeList, setBadgeList] = React.useState([
    {
      firstName: "Jane",
      lastName: "Doe",
      number: "1234567",
      favoriteFood: "Pizza"
    }
  ])

const listOfBadges = badgeList.map((person, index) => <Badge 
      key={index+person}
      firstName={person.firstName}
      lastName={person.lastName}
      number={person.number}
      favoriteFood={person.favoriteFood}
/>)

const addItemToList = (newBadgeEntry) => {
  setBadgeList(prevList=> [...prevList, newBadgeEntry])
}


  return(
    <div>
        <Form addItemToList={addItemToList}/>
        {listOfBadges}
    </div>
  )
}