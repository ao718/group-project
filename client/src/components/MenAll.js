import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from './ItemCard.js'
import Results from "./Results.js";

class Men extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={

        }
    }
    componentDidMount(){
        
        this.props.getAllMenInventory(this.props.item)
    }
    render(){
    return(
    <div className = "men">
        <div className="heroHeader">
            <h2>Men's Fashion</h2>
            <h5>All the most popular retro kicks, outerware, and more</h5>
        </div>
        This is the men page 
        
        {this.props.inventory.map(item => <ItemCard key={item._id} favorites={item.favorites} brand={item.brand} image={item.imgUrl} price={item.price} object={item}/> )}
    </div>
    )
    }
}

export default withInventory(Men)