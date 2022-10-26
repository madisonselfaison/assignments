import React from "react"

export default function Form(props) {
    const [badgeEntry, setBadgeEntry] = React.useState({
        firstName: "",
        lastName: "",
        number: "",
        favoriteFood: ""
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setBadgeEntry((prevBadgeEntry) => {
            return {
                ...prevBadgeEntry,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("the form was submitted")
        props.addItemToList(badgeEntry)
        setBadgeEntry({
            firstName: "",
            lastName: "",
            number: "",
            favoriteFood: ""
    })
    }

    return(
        <div className="form-container">
            <form className="form">
                <input
                    placeholder="First Name"
                    name="firstName"
                    value={badgeEntry.firstName}
                    onChange={handleChange}
                />
                <input
                    placeholder="Last Name"
                    name="lastName"
                    value={badgeEntry.lastName}
                    onChange={handleChange}
                />
                <input
                placeholder="Phone Number"
                name="number"
                value={badgeEntry.number}
                onChange={handleChange}
                />
                <input
                placeholder="Favorite Food"
                name="favoriteFood"
                value={badgeEntry.favoriteFood}
                onChange={handleChange}
                />
                <button className="form--submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}