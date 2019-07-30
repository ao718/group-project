import React from "react"

const BrowseButton = props => {
    return(
    <button style={props.style} onClick= {props.onClick} className = "browseButton">
        press to browse & filter
    </button>
    )
}

export default BrowseButton