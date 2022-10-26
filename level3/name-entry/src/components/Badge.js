import React from "react"

function Badge(props) {
    return (
        <div className="badge">
            <h1>Name: {props.firstName} {props.lastName}</h1>
            <h1>Phone Number: {props.number}</h1>
            <h1>Favorite Food: {props.favoriteFood}</h1>
        </div>
    )
}

export default Badge;