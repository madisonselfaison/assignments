import React from "react"
import Navbar from "./components/Navbar"
import "./styles.css"
import data from "./data"
import BlogList from "./components/BlogList"
import Footer from "./components/Footer"


export default function App() {

  const blogs = data.map(item => {
    return(
        <BlogList
              title={item.title}
              subTitle={item.subTitle}
              author={item.author}
              date={item.date}
              />
    )
  })
    return ( 
          <div>
              <Navbar />
              {blogs}
              <Footer />
          </div>
    )
}
