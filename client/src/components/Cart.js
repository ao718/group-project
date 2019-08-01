import React,{Component} from 'react'
import {withUser} from "../context/UserProvider.js"
import {withInventory} from "../context/InventoryProvider.js"
import CartCard from "./CartCard.js"

class Cart extends Component {

    constructor(props){
        super (props)
        this.state = {
            userId: ""
        }
    }
    componentDidMount(){
        this.props.getUserCart(this.props.user._id)
        this.props.addToCart(this.props.user._id)
        this.setState({userId: this.props.user._id})
    }
   
    
    render(){
        console.log(this.props)
      const mappedItems =  this.props.cart.map(item => 
                <CartCard key={item._id} image={item.imgUrl} brand={item.brand} price={item.price} favorites={item.favorites} id={item._id}  />
    
            )
        return(

            <div className="resultsList">
                {mappedItems}
            </div>
        )
    }
}

export default withUser(withInventory(Cart))