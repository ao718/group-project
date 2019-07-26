import React from "react"
import {withInventory} from "../context/InventoryProvider.js"

class Men extends React.Component{
    constructor(props){
        console.log(props)
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.getByBrand("Yeezy")
    }
    render(){
    return(
    <div className = "men">
        This is the men page 
        {this.props.inventory.map(item => <h1 key={item._id}>{item.brand}</h1> )}
    </div>
    )
    }
}

export default withInventory(Men)