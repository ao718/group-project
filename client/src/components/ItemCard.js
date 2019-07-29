import React from "react"

const ItemCard = props => {
    return(

        <div className="itemCard">
        <div className="imageContainer">
            <img className="imageFit" alt="itemPic" src={props.image}></img>
        </div>
        <p>${props.price}</p>
        <p>{props.brand}</p>
    </div>


    )
    
}
export default ItemCard