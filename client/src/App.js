import React from "react"
import {Switch,Route, Redirect} from "react-router-dom"
import Home from "./components/Home.js"
// import Footer from "./components/Footer.js"
import Men from "./components/Men.js"
import Header from "./components/Header.js"
import Results from "./components/Results.js"
import BrowseResults from "./components/BrowseResults"
import HotItems from "./components/HotItems.js"
import Auth from "./components/Auth"
import Cart from "./components/Cart.js"
// import ProtectedRoute from "./shared/ProtectedRoute.js"


const App = props => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path="/" render = {routerProps => <Home {...routerProps}/> }/>
            <Route path="/hotitems" render = {routerProps => <HotItems {...routerProps} /> } />
            <Route path="/men" render = {routerProps => <Men {...routerProps} /> } />
            <Route path="/results" render = {routerProps => <Results {...routerProps} />} />
            <Route path="/menaccessories" render = {routerProps => <BrowseResults department= "accessories" gender="men" {...routerProps} />} />
            <Route path="/mensocks&underwear" render = {routerProps => <BrowseResults department= "socks & underwear" gender="men" {...routerProps} />} />
            <Route path="/menouterwear" render = {routerProps => <BrowseResults department= "outerwear" gender="men" {...routerProps} />} />
            <Route path="/menshirts" render = {routerProps => <BrowseResults department= "shirts" gender="men" {...routerProps} />} />
            <Route path="/menshoes" render = {routerProps => <BrowseResults department= "shoes" gender="men" {...routerProps} />} />
            <Route path="/menpants" render = {routerProps => <BrowseResults department= "pants" gender="men" {...routerProps} />} />
            <Route path="/womenaccessories" render = {routerProps => <BrowseResults department= "accessories" gender="women" {...routerProps} />} />
            <Route path="/womensocks&underwear" render = {routerProps => <BrowseResults department= "socks & underwear" gender="women" {...routerProps} />} />
            <Route path="/womenouterwear" render = {routerProps => <BrowseResults department= "outerwear" gender="women" {...routerProps} />} />
            <Route path="/womenshirts" render = {routerProps => <BrowseResults department= "shirts" gender="women" {...routerProps} />} />
            <Route path="/womenshoes" render = {routerProps => <BrowseResults department= "shoes" gender="women" {...routerProps} />} />
            <Route path="/womenpants" render = {routerProps => <BrowseResults department= "pants" gender="women" {...routerProps} />} />
            <Route path="/genderneutral" render = {routerProps => <Auth {...routerProps} />} />
            <Route path="/cart" render = {routerProps => <Cart {...routerProps} />} />
            
            
        </Switch>
        
       {/* <Footer/> */}
        </>
    )
}

export default App