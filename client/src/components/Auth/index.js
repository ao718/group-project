import React, {Component} from "react"
import AuthForm from "./AuthForm.js"
import { withUser } from "../../context/UserProvider.js"
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
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSignupSubmit = e => {
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
            <Toggle render={({on, toggler}) =>
            <main>
                    <section className="formSection">
                        <div className="authFormContainer">
                        {/* <Toggle render={({on, toggler}) => */}
                            { !on ?

                                <>
                                    <AuthForm
                                        className="authForm"
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleSubmit={this.handleSignupSubmit}
                                        handleChange={this.handleChange}
                                        buttonText="sign up"/>

                                </>
                            :    
                                <>
                                    <AuthForm
                                        username={this.state.username}
                                        password={this.state.password}
                                        handleSubmit={this.handleLoginSubmit}
                                        handleChange={this.handleChange}
                                        buttonText="Log In"/>
                                </>
                            }
                                <button onClick={toggler}>Dont have an account yet?</button>
                        </div>
                    </section>
                </main>
            }/>
        )
    }
}

export default withUser(Auth)
