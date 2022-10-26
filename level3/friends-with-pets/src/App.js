import react from "react"
import Friend from "./components/Friend"
import data from "./data"
import "./styles.css"

export default function App(){
  const friends = data.map(item => {
    return(
      <Friend
          key={item.id}
          {...item}
          // name={item.name}
          // age={item.age}
          // petName={item.pets.name} I AM UNABLE TO PASS PET NAME AND BREED INTO THE LIVE SERVER
          // petBreed={item.pets.breed}
          />
    )
  })
  return (
      <div>
        <section className="friends-list">
          {friends}
        </section>
      </div>
  )
}