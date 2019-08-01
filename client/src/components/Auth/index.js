import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { withUser } from '../../context/UserProvider.js'


class Auth extends Component {
    constructor(){
        super()
        this.state = {
            Username: "",
            Password: "",
            toggle: false
        }
    }

    toggler = () => {
        this.setState(prevState => ({ toogle: !prevState.toggle }))
    } 

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSignupSubmit = e => {
        e.preventDefault()
        const creds = {
            username: this.state.username,
            password: this.state.password
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
        return (
            <div>
                { !this.state.toggle ?
                <>
                    <AuthForm 
                        username = {this.state.username}
                        password = {this.state.password}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleSignupSubmit}
                        btnText = 'Sign up'
                    />
                    <p onClick = {this.toggler}> Already have an account? </p>
                  </>  
                :
                <>
                    <AuthForm 
                        username = {this.state.username}
                        password = {this.state.password}
                        handleChange = {this.handleChange}
                        handleSubmit = {this.handleLoginSubmit}
                        btnText = 'Login'
                    />
                    <p onClick = {this.toggler}> Don't have an account? </p>
                </> 
                }
            </div>
        )
    }
}
export default withUser(Auth);