import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react"
import {Link} from "react-router-dom"
import {withUser} from "../context/UserProvider.js"
import MobileMenu from "./MobileMenu.js"
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faAirFreshener} from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
   
    
    render(){
        const {logout} = this.props
    return(
    <>
    <section style={{height: "10vh", width: "100vw", position: "fixed", zIndex: "6"}}>
        <div className="headerTop">
            <FontAwesomeIcon icon={faAirFreshener} color="bronze"  size="2x" />
            <h6>OurName</h6>
            <div style={{ position: "relative", right: "-57px", top:"0px", backgroundImage: `url(${"https://image.flaticon.com/icons/svg/206/206626.svg"})`, backgroundPosition: "center", backgroundSize: "cover", height: "100%", width: "30px"}}></div>
            <FontAwesomeIcon rotation={90} icon={faSearch} color="bronze"  size="s" />
        </div>
        <div className="header">
            <FontAwesomeIcon onClick={this.toggle} icon={faBars} color="white" className="burger" size="2x" />
            <FontAwesomeIcon icon={faAirFreshener} color="gold"  size="2x" className="burger" />
            <Link to={{pathname: `/`, state: {...this.state} }} className="asMenuLink">Home</Link>
            <Link to={{pathname: `/men`, state: {...this.state} }} className="asMenuLink">Men</Link>
            <Link to={{pathname: `/women`, state: {...this.state} }} className="asMenuLink">Women</Link>
            <Link onClick={localStorage.token && logout} to={{pathname: localStorage.token? "/" : "/loginsignup"}} className="asMenuLink">{localStorage.token? "Logout" : "Login"}</Link>
            <Link to={{pathname: `/cart`, state: {...this.state} }} className="cart">        
                <FontAwesomeIcon icon={faShoppingCart} color="white" className="cart" size="2x" /> </Link>
        </div>
  
    </section>
    <MobileMenu onClick={this.toggle} style={!this.state.dropdownOpen? {left: "-390px"} : {left: "0px"}}></MobileMenu>
    
    </>
    )
    }
}

export default withUser(Header)