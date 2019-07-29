import React, {Component} from 'react'
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"

class Results extends Component{
    constructor(props){
        super()
        this.state = {
            results: []
        }
    }
    componentDidMount(){
        this.props.getAllQueries(this.props.location.state.gender, this.props.location.state.department, this.props.location.state.clothingSize)
        this.setState({
            results: this.props.inventory
        })
    }
    
    render(){
       
    const mappedResults = this.state.results.map(result => 
            <ItemCard key={result._id} image={result.imgUrl} brand={result.brand} price={result.price} />
    
        )
    console.log(this.props)
    return(
        <div>
            
            {mappedResults}
        </div>
    )
    }
}
export default withInventory(Results)
