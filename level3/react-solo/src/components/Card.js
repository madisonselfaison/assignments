import React from "react"

export default function Card(props) {
return (
     <div className="card">
            <h2 className="card--title">{props.item.title}</h2>
            <img src="../images/location-pin.png" className="location--pin" />
            <p className="card--location">{props.item.location}</p>
            <p className="card--maps">{props.item.googleMapsUrl}</p>
            <p className="card--title">{props.item.title}</p>
            <h4 className="card--startDate">{props.item.startDate}</h4>
            <h4 className="card--endDate">{props.item.endDate}</h4>
            <p className="card--description">{props.item.description}</p>
    </div>
)
        }