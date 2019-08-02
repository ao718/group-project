import React, {Component} from 'react'
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import SideNav from "./SideNav.js"
import BrowseButton from "./BrowseButton.js"
import Toggle from "../shared/toggler.js"
import Footer from "./Footer.js"


class Results extends Component{
    constructor(props){
        super(props)
        this.state = {
            results: []
        }
    }
    componentDidMount(){
        this.props.getAllQueries(
            this.props.location.state.gender, 
            this.props.location.state.department, 
            this.props.location.state.clothingSize
            )
       
    }
    
    
    render(){
        const user = JSON.parse(localStorage.getItem("user"))
        const userId = user._id
        
       
    const mappedResults = this.props.inventory.map(result => {
          
         return   <ItemCard key={result._id} image={result.imgUrl} brand={result.brand}  price={result.price} description={result.description}  favorites={result.favorites} object={result}/>
    
    })
    console.log(this.props)
    return(

            <main>
                <div className="resultsList">
                    
                    {mappedResults}
                </div>
                <Footer></Footer>
            </main>    
    
    )
    }
}
export default withInventory(Results)
