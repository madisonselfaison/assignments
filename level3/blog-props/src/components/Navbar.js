import React from "react"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src="https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg" 
            alt="cool pic"
            className="headerImg" />

            <a href className="site-title">Start Bootstrap</a>
            <ul className="list">
                <li className="home">
                    HOME
                </li>
                <li className="about">
                    ABOUT 
                </li>
                <li className="sample">
                    SAMPLE POST
                    </li>
                <li className="contact">
                    CONTACT
                    </li>
            </ul>
            <h2 className="subTitle">Clean Blog</h2>
            <p className="otherTitle">A Blog Theme by Star Bootstrap</p>
        </nav>
    )
}