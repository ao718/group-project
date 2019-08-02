import React, {Component} from "react"
import {withInventory} from "../context/InventoryProvider.js"
import ItemCard from "./ItemCard.js"
import Toggle from "../shared/toggler.js"
import Footer from "./Footer.js"



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
    // console.log(this.props)
    return(
        <>
        <Toggle render={({on, toggler}) =>
        <>
        <main>
            <div style={{ backgroundPositionY: "80%" , paddingTop:"80px", backgroundImage: `url(${"https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/22366393_1850004525016833_819385291533654121_n.jpg?_nc_cat=105&_nc_oc=AQlzolVlm118Zhdz3xzxMQMb5rX2GmC93iVEUdlqUrnzDcURilmmx2wBqWtElZGkjS0&_nc_ht=scontent-dfw5-2.xx&oh=c65d46520893ad6e8dd2290157e38ab3&oe=5DAC8D7E"})`}} className="heroHeader">
                    <h2>Discover what's hot </h2>
                    <h5>We got you covered</h5>
            </div>
            <div className="resultsList">
                {mappedResults}
            </div>
            <Footer></Footer>

        </main>
           
        </>
        }/>
        </>
    )
    }
}

export default withInventory(HotItems)