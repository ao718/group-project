import React, {Component} from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import SideNav from "./SideNav.js"
import BrowseButton from "./BrowseButton.js"
import Toggle from "../shared/toggler.js"



class BrowseResults extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getDepartments(this.props.department, this.props.gender)
      
    }
    componentDidUpdate(prevProps){
        if(prevProps.department !== this.props.department || prevProps.gender !== this.props.gender || prevProps.favorites !== this.props.favorites){
            this.props.getDepartments(this.props.department, this.props.gender)
        }
    }
    
    
    render(){
        console.log(this.props)
        const user = JSON.parse(localStorage.getItem("user"))
        const userId = user._id
        
       
    const mappedResults = this.props.inventory.map(result => {
            console.log(result)
           return <ItemCard key={result._id} image={result.imgUrl} brand={result.brand} price={result.price} favorites={result.favorites} id={result._id} object={result}  />
    
    })
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

export default withInventory(BrowseResults)