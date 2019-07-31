import React from "react"
import {Link} from "react-router-dom"

const SideNav = props => {

    return(
        <div className="sideNav" style={props.style}>
            <div>
                <p>Browse by:</p>
            </div>
            <h4>Men</h4>
            <Link to={{pathname: `/menaccessories`}}> accessories </Link> 
            <Link to={{pathname: `/mensocksandunderwear`}}> socks and underwear </Link> 
            <Link to={{pathname: `/menouterwear`}}> outerwear </Link> 
            <Link to={{pathname: `/menshirts`}}> shirts </Link> 
            <Link to={{pathname: `/menpants`}}> pants </Link> 
            <Link to={{pathname: `/menshoes`}}> shoes </Link> 
            <h4>Women</h4>
            <Link to={{pathname: `/womenaccessories`}}> accessories </Link> 
            <Link to={{pathname: `/womensocksandunderwear`}}> socks and underwear </Link> 
            <Link to={{pathname: `/womenouterwear`}}> outerwear </Link> 
            <Link to={{pathname: `/womenshirts`}}> shirts </Link> 
            <Link to={{pathname: `/womenpants`}}> pants </Link> 
            <Link to={{pathname: `/womenshoes`}}> shoes </Link> 
        </div>

    )
}

export default SideNav