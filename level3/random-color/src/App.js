import React, { useEffect } from "react"
import axios from "axios"

function App() {
  const [color, setColor] = React.useState({hex: ''});

  useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response => response.data)
    .then(data => setColor(data.colors))
  }, [])

  const getEm = () => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response => response.data)
    .then(data => setColor(data.colors))
  }
  
return (
  <div style={{backgroundColor: `#${color[0]?.hex}`, height: "2000px"}}>
      <button onClick={getEm}>Randomize</button>
  </div>
)
}
 export default App;