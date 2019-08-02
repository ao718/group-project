import React from "react"
import {Link} from "react-router-dom"


const MobileMenu = props => {
    return(
        <div className="mobileMenu" style={props.style}>
            <Link to={{pathname: `/men/`}} className="asMenuLink"> Men </Link> 
            <Link to={{pathname: `/women/`}} className="asMenuLink"> Women </Link> 
            <Link to={{pathname: `/hotitems/`}} onClick={props.onClick} className="asMenuLink">Hot Items</Link> 
            <Link to={{pathname: `/sales/`}} className="asMenuLink"> Sales </Link> 
            <Link to={{pathname: `/`}} className="asMenuLink">Filter</Link>
            <Link to={{pathname: `/`}} className="asMenuLink"> Home </Link>
            <Link to={{pathname: `/cart/`}} className="asMenuLink">Cart</Link> 
            <Link to={{pathname: `/loginlogout/`}} className="asMenuLink">{localStorage.token? "logout" : "login/sign up"}</Link> 
            {/* <Link to={{pathname: `/inquiries/`}} className="asMenuLink"> Inquiries </Link>     */}
        </div>

    )
}

export default MobileMenu