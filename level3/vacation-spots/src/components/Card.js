import react from "react"

export default function Cards(props) {
    return (
        <div className="cards">
                <div className="place">
                    <h2>{props.place}</h2>
                </div>
            <div className="price">
                    <h3>${props.price}</h3>
            </div>
                <div className="timeToGo">
                    <h4>{props.timeToGo} is the best time to visit.</h4>
                </div>
                <div className="pricePoint">How expensive is it? {props.pricePoint}</div>
        </div>
    )
}