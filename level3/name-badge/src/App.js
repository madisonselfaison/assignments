import React from "react"
import Form from "./components/Form"
import Badge from "./components/Badge"

export default function App(props){
  const [badgeList, setBadgeList] = React.useState([])
  
  const listOfBadges = badgeList.map((person, index) => <Badge
  key={index+person.firstName}
  firstName={person.firstName}
  lastName={person.lastName}
  email={person.email}
  birthPlace={person.birthPlace}
  phone={person.phone}
  favoriteFood={person.favoriteFood}
  comments={person.comments}
  />)


      const addItemToList = (newBadgeEntry) => {
        setBadgeList(prevList=> [... prevList, newBadgeEntry])     
      }

  return(
    <div>
        <Form addItemToList={addItemToList} />
        {listOfBadges}
    </div>
  )
}
