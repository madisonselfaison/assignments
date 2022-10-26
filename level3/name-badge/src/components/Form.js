import React from "react"

export default function Form(props){
    const [badgeEntry, setBadgeEntry] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phone: "",
        favoriteFood: "",
        comments: ""
    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setBadgeEntry((prevBadgeEntry) => {
            return {
                ... prevBadgeEntry,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addItemToList(badgeEntry)
        setBadgeEntry({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favoriteFood: "",
            comments: ""
        })
    }

    return(
        <div className="form-container">
            <form name="form" onSubmit={handleSubmit}>
                <input 
                    required
                    type="text"
                    placeholder="First Name" 
                    name="firstName"
                    minlength="3"
                    value={badgeEntry.firstName}
                    onChange={handleChange}
                />
                <input 
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    minlength="3"
                    value={badgeEntry.lastName}
                    onChange={handleChange}
                />
                <input 
                    required
                    type="email"
                    placeholder="Email"
                    name="email"
                    minlength="3"
                    value={badgeEntry.email}
                    onChange={handleChange}
                />
                <input 
                    required
                    type="text"
                    placeholder="Place of Birth"
                    name="birthPlace"
                    minlength="3"
                    value={badgeEntry.birthPlace}
                    onChange={handleChange}
                />
                <input 
                    required
                    type="tel"
                    placeholder="Phone: 9757653323"
                    name="phone"
                    minlength="3"
                    value={badgeEntry.phone}
                    onChange={handleChange}
                />
                <input 
                    required
                    type="text"
                    placeholder="Favorite Food"
                    name="favoriteFood"
                    minlength="3"
                    value={badgeEntry.favoriteFood}
                    onChange={handleChange}
                />
                <textarea className="textArea" 
                    required
                    minlength="3"
                    placeholder="Tell us about yourself"
                    name="comments"
                    
                    value={badgeEntry.comments}
                    onChange={handleChange}
                />
                <button className="button">Submit</button>
            </form>
        </div>
    )
}