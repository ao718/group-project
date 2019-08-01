import React from "react"
import {Link} from "react-router-dom"


const MobileMenu = props => {
    return(
        <div className="mobileMenu" style={props.style}>
            <Link to={{pathname: `/menaccessories/`}} className="asMenuLink"> Men's Accessories </Link> 
            <Link to={{pathname: `/mensocksandunderwear/`}} className="asMenuLink"> Men's Socks & Underwear </Link> 
            <Link to={{pathname: `/menshirts/`}} className="asMenuLink"> Men's Shirts </Link> 
            <Link to={{pathname: `/menshoes/`}} className="asMenuLink"> Men's Shoes </Link> 
            <Link to={{pathname: `/menpants/`}} className="asMenuLink"> Men's Pants </Link>
            <Link to={{pathname: `/menouterwear/`}} className="asMenuLink"> Men's Outerwear </Link>
            <Link to={{pathname: `/womenaccessories/`}} className="asMenuLink"> Women's Accessories </Link> 
            <Link to={{pathname: `/womensocksandunderwear/`}} className="asMenuLink"> Women's Socks & Underwear </Link> 
            <Link to={{pathname: `/womenshirts/`}} className="asMenuLink"> Women's Shirts </Link> 
            <Link to={{pathname: `/womenshoes/`}} className="asMenuLink"> Women's Shoes </Link> 
            <Link to={{pathname: `/womenpants/`}} className="asMenuLink"> Women's Pants </Link>
            <Link to={{pathname: `/womenouterwear/`}} className="asMenuLink"> Women's Outerwear </Link>
            
        </div>

    )
}

export default MobileMenu