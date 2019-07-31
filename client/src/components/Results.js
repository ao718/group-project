import React, {Component} from 'react'
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import SideNav from "./SideNav.js"
import BrowseButton from "./BrowseButton.js"
import Toggle from "../shared/toggler.js"

class Results extends Component{
    constructor(props){
        super()
        this.state = {
            results: []
        }
    }
    componentDidMount(){
        this.props.getAllQueries(this.props.location.state.gender, this.props.location.state.department, this.props.location.state.clothingSize)
       
    }
    
    render(){
       
    const mappedResults = this.props.inventory.map(result => 
            <ItemCard key={result._id} image={result.imgUrl} brand={result.brand} price={result.price} clothingSize={result.clothingSize} favorites={result.favorites} />
    
        )
    console.log(this.props)
    return(
        <Toggle render={({on, toggler}) =>
            <div className="resultsList">
                <SideNav style={{left: on? "0px" : "-150px"}}></SideNav>
                
                {mappedResults}
                <BrowseButton onClick={toggler}></BrowseButton>
            </div>
        }/>
    )
    }
}
export default withInventory(Results)
