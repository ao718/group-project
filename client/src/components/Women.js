import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from './ItemCard.js'
import Results from "./Results.js";

class Women extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        this.props.getAllWomenInventory(this.props.item)
    }
    render(){
    return(
    <div className = "resultsList">
        <h1>Shop of all the women Inventory</h1>
        
        {this.props.inventory.map(item => <ItemCard key={item._id} brand={item.brand} image={item.imgUrl} price={item.price} /> )}
    </div>
    )
    }
}

export default withInventory(Women)