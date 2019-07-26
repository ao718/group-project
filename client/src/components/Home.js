import React, {Component} from 'react'


class Home extends Component {
    constructor(){
        super()
        this.state = {
            gender:"",
            department: "",
            clothingSize: "", 
            price :"",
            brand: "",
            isMuggle: false,
            favorites: "", 
            array: []  
        }
    }
    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const user = {
            gender: this.state.gender,
            department: this.state.department,
            clothingSize: this.state.clothingSize,
            price: this.state.price,
            brand: this.state.brand,
            isMuggle: this.state.isMuggle,
            favorites: this.state.favorites,
            
        }
        this.setState(prevState => ({
                gender: "",
                department : "",
                clothingSize : "", 
                price : "",
                brand : "",
                isMuggle : false,
                favorites : "",
                array: [...prevState.array, user]
        }))
    }
    render(){
        return(
            <div className = "home">
                <h1> Our title </h1>
                <form onSumbit={this.handleSubmit} className="form">
                    <select className="select" name="gender" onChange={this.handleChange}> 
                        <option value="none"> - Select a Gender - </option>
                        <option value="male"> Male </option>
                        <option value="female"> Female </option>
                    </select>
                    <select className="select" name="department" onChange={this.handleChange}>
                        <option value="none"> - Select a Department - </option>
                        <option value="shirts"> Shirts</option>
                        <option value="pants"> Pants</option>
                        <option value="shoes"> Shoes</option>
                        <option value="accessories"> Accessories</option>
                        <option value="socks & underwear"> Socks and Underwear</option>
                        <option value="outerwear"> Outerwear</option>
                    </select>
                    <select className="select" name="clothingSize" onChange={this.handleChange}>
                        <option value="none"> - Select a Size - </option>
                        <option value="x-small"> Extra Small </option>
                        <option value="small"> Small</option>
                        <option value="medium"> Medium</option>
                        <option value="large"> Large</option>
                        <option value="x-large"> Extra Large</option>
                    </select>
                    <select className="select" name="price" onchange={this.handleChange}>
                        <option value="none"> - Select a Price - </option>
                        <option value="0-25"> $0-25 </option> 
                        <option value="25-50"> $25-50 </option> 
                        <option value="75-100"> $75-100 </option> 
                        <option value="100-200"> $100-200 </option> 
                    </select>      
                    <button className="select"> Submit </button>             
                </form>
                <p className="clothe">Shop for Clothes</p>
            </div>
        )
    }
}
    


export default Home 



 
