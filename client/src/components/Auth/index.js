import React, {Component} from "react"
import AuthForm from "./AuthForm.js"
import {withUser } from "../../context/UserProvider.js"
import Toggle from "../../shared/toggler.js"


class Auth extends Component {
    constructor(props){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value})
    }

    handleSigupSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password,
            
        }
        this.props.signup(creds)
    }

    handleLoginSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(creds)
    }
    
    
    render(){
        console.log(this.props)
        return(
    
            <div className="authForm">
            {/* <Toggle render={({on, toggler}) => */}
                { !localStorage.token ?

                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleSubmit={this.handleSigupSubmit}
                            handleChange={this.handleChange}
                            buttonText="sign up"/>

                    </>
                :    
                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleSubmit={this.handleLogInSubmit}
                            handleChange={this.handleChange}
                            buttonText="Log In"/>
                    </>
                }
            {/* }/> */}
            </div>
            
        )
    }
}

export default withUser(Auth)