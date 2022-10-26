import { waitForElementToBeRemoved } from "@testing-library/dom"
import react from "react"

export default function Footer() {
    return (
            <div className="footer">
                <div>
                    <p className="copy">Copyright © Your Website 2022</p>
                </div>
            </div>
    )
}