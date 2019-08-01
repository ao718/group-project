import React, {Component} from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import SideNav from "./SideNav.js"
import BrowseButton from "./BrowseButton.js"
import Toggle from "../shared/toggler.js"



class HotItems extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getFavorites()
      
    }
    componentDidUpdate(prevProps){
        if(prevProps.department !== this.props.department || prevProps.gender !== this.props.gender || prevProps.favorites !== this.props.favorites){
            this.props.getDepartments(this.props.department, this.props.gender)
        }
    }
    
    
    render(){
       
    const mappedResults = this.props.inventory.map(result => 
            <ItemCard key={result._id} image={result.imgUrl} brand={result.brand} price={result.price} favorites={result.favorites} id={result._id} object={result} />
    
        )
    console.log(this.props)
    return(
        <Toggle render={({on, toggler}) =>
            <div className="resultsList">
                <SideNav handleClick={toggler} style={{left: on? "0px" : "-150px"}}></SideNav>
                
                {mappedResults}
                <BrowseButton style={{left: on? "-75px" : "-8px"}} onClick={toggler}></BrowseButton>
            </div>
        }/>
    )
    }
}

export default withInventory(HotItems)