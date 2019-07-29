import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    
             </section>
        )
    }
}

export default Header