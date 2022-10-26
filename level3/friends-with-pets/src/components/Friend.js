import react from "react"

export default function Friend(props) {
    console.log(props)
    return(
        <div className="friends">
            <div className="name">
                <h2>{props.name}</h2>
            </div>
                <div className="age">
                    <p>{props.age}</p>
                </div>
        </div>
    )
}