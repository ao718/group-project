// import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
// import Draggable from "gsap/Draggable"
// import ScrollToPlugin from "gsap/ScrollToPlugin"
// import {TweenMax, CSSPlugin, ScrollToPlugin, Draggable, Elastic} from "gsap/all"
// const plugins = [CSSPlugin, ScrollToPlugin] 
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

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
            <div className = 'aofooter'>
                <h2 style={{color: "white"}}>Join our mailing list</h2>
                <form className= 'aoform' onSubmit = {this.handleSubmit}>
                    <input className = 'aoinput' type="text" 
                           name="email" 
                           value ={this.state.email} 
                           onChange ={this.handleChange}
                           placeholder="Email Address"/>
                    <button id = 'submit'> Subscribe </button>
                </form>
                <p id= "aosubscribe"> </p>
                <div className= 'aa'>
                    <a href="facebook.com"><FontAwesomeIcon icon = {faTwitter}/> </a>
                    <a href="#"><FontAwesomeIcon icon = {faInstagram}/> </a>
                    <a href="#"><FontAwesomeIcon icon = {faFacebook} /> </a>
                </div>
            </div>
        )
    }
}

 

export default Footer