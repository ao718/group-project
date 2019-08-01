import React,{Component} from 'react'
import {withUser} from "../context/UserProvider.js"
import CartCard from "./CartCard.js"

class Cart extends Component {

    constructor(props){
        super (props)
        this.state = {

        }
    }
    componentDidMount(){
        this.props.getUserCart(this.props.user._id)
    }
    componentDidMount(){
        this.props.addToCart(this.props.user._id)
    }
    
    render(){
        // console.log(this.props.user._id)
      const mappedItems =  this.props.user.cart.map(item => 
                <CartCard key={item._id} image={item.imgUrl} brand={item.brand} price={item.price} favorites={item.favorites} userId={item.id} />
    
            )
        return(

            <div className="resultsList">
                {mappedItems}
            </div>
        )
    }
}

export default withUser(Cart)