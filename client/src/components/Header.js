import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu, } from "reactstrap"
import React from "react"
import {Link} from "react-router-dom"
import { withUser } from "../context/UserProvider.js"

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
    <section className="header">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            Menu
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Fashion</DropdownItem>
                <DropdownItem tag={Link} to="/men">Men</DropdownItem>
                <DropdownItem tag={Link} to="/women">Women</DropdownItem>
                <DropdownItem tag={Link} to="/hotitems">Hot Items</DropdownItem>
                <DropdownItem tag={Link} to="/sales">On Sale</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/">Home</DropdownItem>
                <DropdownItem tag={Link} to="/about">About</DropdownItem>
                <DropdownItem tag={Link} to="/contact">Contact</DropdownItem>
                <DropdownItem tag={Link} to="/loginsignup" >Log In/Sign Up</DropdownItem>
                {localStorage.token && <DropdownItem onClick={logout}>Log Out</DropdownItem>}

            </DropdownMenu>
        </Dropdown>
        <h1>Our Store</h1>
        <Link to={{pathname: `/cart`, state: {...this.state} }} className="link">        
            <FontAwesomeIcon icon={faShoppingCart} color="white" className="cart" size="2x" /> </Link>
    </section>
    )
    }
}

export default withUser(Header)