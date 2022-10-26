import react from "react"

export default function Blog(props) {
    return (
        <div className="blog">
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
             <div className="sub">
                <h3>{props.subTitle}</h3>
             </div>
                <div className="author">
                    <p>{props.author}</p>
                </div>
             <div className="date">
                    <p>{props.date}</p>
              </div>
        </div>
    )
}