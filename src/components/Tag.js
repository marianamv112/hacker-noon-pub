import React from "react"
import "./Tag.css"

const Tag = ({tag}) => {
    return <a className="tagBadge" href={process.env.REACT_APP_HACKERNOON_URL + "/tagged/" + tag}>{"#" + tag}</a>
}

export default Tag;