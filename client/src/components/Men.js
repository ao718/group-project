import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from './ItemCard.js'
import Results from "./Results.js";

class Men extends React.Component{
    constructor(props){
        console.log(props)
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.getByBrand("")
    }
    render(){
    return(
    <div className = "men">
        This is the men page 
        
        {this.props.inventory.map(item => <ItemCard key={Results._id} brand={item.brand} image={item.imgUrl} price={item.price} /> )}
    </div>
    )
    }
}

export default withInventory(Men)