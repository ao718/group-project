import React from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from './ItemCard.js'
import Results from "./Results.js";
import Footer from "./Footer.js"
import {Link} from "react-router-dom"

class Women extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state={

        }
    }
    render(){
    return(
        <main className = "men">
            <div style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1507298338772-4f102796b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"})`}} className="heroHeader">
                <h2>Women's Fashion</h2>
                <h5>Get trendy for the summer</h5>
            </div>
            <div className="linkContainer">
            <Link to={{pathname: `/allwomen/`}} className="asLink"> Shop All  </Link> 
            <Link to={{pathname: `/womenaccessories/`}} className="asLink"> Women's Accessories </Link> 
            <Link to={{pathname: `/womensocksandunderwear/`}} className="asLink"> Women's Socks & Underwear </Link> 
            <Link to={{pathname: `/womenshirts/`}} className="asLink"> Women's Shirts </Link> 
            <Link to={{pathname: `/womenshoes/`}} className="asLink"> Women's Shoes </Link> 
            <Link to={{pathname: `/womenpants/`}} className="asLink"> Women's Pants </Link>
            <Link to={{pathname: `/womenouterwear/`}} className="asLink"> Women's Outerwear </Link>  
            </div>
            <Footer></Footer>
        
    </main>
    )
    }
}

export default withInventory(Women)