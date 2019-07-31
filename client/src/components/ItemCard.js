import React, {Component} from "react"

class ItemCard extends Component{
    constructor(props){
        super()
        this.state={

        }
    }
        
    handleClick = e => {
            e.preventDefault()
    }
    render(){
        return(

            <div className="itemCard">
                <div className="imageContainer">
                    <img className="imageFit" alt="itemPic" src={this.props.image}></img>
                </div>
                <p>{this.props.price}</p>
                <p>{this.props.brand}, size: {this.props.clothingSize}</p>
                
                <p>favorited by {this.props.favorites} others</p>
                <div>
                    <button onClick={this.handleClick}> Add to Favorites</button>
                    <button > Add to Cart</button>
                </div>
            
            </div>


            )
        }
    }

export default ItemCard