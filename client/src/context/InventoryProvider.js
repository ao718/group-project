import React, {Component} from "react" 
import axios from "axios";
const InventoryContext = React.createContext()

class InventoryProvider extends Component {
    constructor (){
        super()
        this.state = {
            inventory: []
        }
    }    

    getAllMenInventory = () => {
        axios.get("/inventory/men")
            .then(res => this.setState({inventory: res.data}))
            .catch(err => console.log(err))
    }
    getAllWomenInventory = () => {
        axios.get("/inventory/women")
            .then(res => this.setState({inventory: res.data}))
            .catch(err => console.log(err))
    }
    getDepartments = (department, gender) => {
        axios.get(`/inventory/department?department=${department}&gender=${gender}`)
            .then(res => this.setState({inventory: res.data}))
            .catch(err => console.log(err))
    }
    getByPrice = () => {
        axios.get("/inventory?price={props.price}")
            .then(res => this.setState({inventory: res.data}))
            .catch(err => console.log(err))
    }
    getByBrand = (brand) => {
        axios.get(`/inventory/brand?brand=${brand}`)
            .then(res => this.setState({inventory: res.data}))
            .catch(err => console.log(err))
    }

        render(){
            return(
                <InventoryContext.Provider value={{
                    getMenInventory: this.getMenInventory,
                    inventory:this.state.inventory,
                    getByBrand: this.getByBrand
                }}>
                    {this.props.children}
                </InventoryContext.Provider>
            )
        }
}

export default InventoryProvider

export const withInventory = C => props => (
    <InventoryContext.Consumer>
        { value => <C {...value} {...props}/> }
    </InventoryContext.Consumer>
)