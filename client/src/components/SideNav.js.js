import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const SideNav = props => {

    return(
        <div className="sideNav" style={props.style}>
            <div>
                <p>Browse by:</p>
            </div>
            <h4>Men</h4>
            <Link to={{pathname: `/menaccessories`}}> accessories </Link> 
            <Link to={{pathname: `/mensocksandunderwear`}}> socks & underwear </Link> 
            <Link to={{pathname: `/menouterwear`}}> outerwear </Link> 
            <Link to={{pathname: `/menshirts`}}> shirts </Link> 
            <Link to={{pathname: `/menpants`}}> pants </Link> 
            <Link to={{pathname: `/menshoes`}}> shoes </Link> 
            <h4>Women</h4>
            <Link to={{pathname: `/womenaccessories`}}> accessories </Link> 
            <Link to={{pathname: `/womensocksandunderwear`}}> socks & underwear </Link> 
            <Link to={{pathname: `/womenouterwear`}}> outerwear </Link> 
            <Link to={{pathname: `/womenshirts`}}> shirts </Link> 
            <Link to={{pathname: `/womenpants`}}> pants </Link> 
            <Link to={{pathname: `/womenshoes`}}> shoes </Link> 
            <div className="closebutton">
                <h6>close</h6>
                <FontAwesomeIcon onClick={props.handleClick} icon={faTimes} color="black"  size="2x" />
            </div>
        </div>

    )
}

export default SideNav