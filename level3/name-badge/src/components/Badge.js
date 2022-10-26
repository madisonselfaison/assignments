import React from "react"

function Badge(props) {
    return (
        <div className="badge">
            <p>Name: {props.firstName} {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Place of birth: {props.birthPlace}</p>
            <p>Phone: {props.phone}</p>
            <p>Favorite food: {props.favoriteFood}</p>
            <p>About you: {props.comments}</p>
        </div>
    )
}
export default Badge;