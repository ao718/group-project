import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu, } from "reactstrap"
import React from "react"
import {Link} from "react-router-dom"

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
                <DropdownItem tag={Link} to="/genderneutral">Gender Neutral</DropdownItem>
                <DropdownItem tag={Link} to="/hotitems">Hot Items</DropdownItem>
                <DropdownItem tag={Link} to="/sales">On Sale</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/">Home</DropdownItem>
                <DropdownItem tag={Link} to="/about">About</DropdownItem>
                <DropdownItem tag={Link} to="/contact">Contact</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <h1>Our Store</h1>
        <FontAwesomeIcon icon={faShoppingCart} color="white" className="cart" size="2x" />
    </section>
    )
    }
}

export default Header