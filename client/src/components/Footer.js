
import React, { Component } from 'react'

class Footer extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            emails: []
        }

    }


    handleChange = (e) => {
        this.setState ({
            email: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const newEmail = this.state.email
        this.setState(prevState => ({
            email: "",
            emails: [...prevState.emails, newEmail]
        }))
    }





    render(){

        return(
            <div className = 'footer'>
                <form className= 'form' onSubmit = {this.handleSubmit}>
                    <input className = 'input' type="text" 
                           name="email" 
                           value ={this.state.email} 
                           onChange ={this.handleChange}
                           placeholder="Email Address"/>
                    <button>Submit</button>
                </form>
                <p id= "subscribe"> Subscribe to our Mailing list</p>
            </div>
        )
    }
}

 

export default Footer