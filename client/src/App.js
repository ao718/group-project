import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./components/Home.js"
// import Footer from "./components/Footer.js"
import Men from "./components/Men.js"
import Header from "./components/Header.js"
import Results from "./components/Results.js"
import BrowseResults from "./components/BrowseResults"
import About from './components/About.js'
const App = props => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path="/" render = {routerProps => <Home {...routerProps}/> }/>
            <Route path="/men" render = {routerProps => <Men {...routerProps} /> } />
            <Route path="/about" render= {routerProps => <About {...routerProps} />} />
            <Route path="/results" render = {routerProps => <Results {...routerProps} />} />
            <Route path="/menaccessories" render = {routerProps => <BrowseResults department= "accessories" gender="men" {...routerProps} />} />
            <Route path="/mensocksandunderwear" render = {routerProps => <BrowseResults department= "socksandunderwear" gender="men" {...routerProps} />} />
            <Route path="/menouterwear" render = {routerProps => <BrowseResults department= "outerwear" gender="men" {...routerProps} />} />
            <Route path="/menshirts" render = {routerProps => <BrowseResults department= "shirts" gender="men" {...routerProps} />} />
            <Route path="/menshoes" render = {routerProps => <BrowseResults department= "shoes" gender="men" {...routerProps} />} />
            <Route path="/menpants" render = {routerProps => <BrowseResults department= "pants" gender="men" {...routerProps} />} />
            <Route path="/womenaccessories" render = {routerProps => <BrowseResults department= "accessories" gender="women" {...routerProps} />} />
            <Route path="/womensocksandunderwear" render = {routerProps => <BrowseResults department= "socksandunderwear" gender="women" {...routerProps} />} />
            <Route path="/womenouterwear" render = {routerProps => <BrowseResults department= "outerwear" gender="women" {...routerProps} />} />
            <Route path="/womenshirts" render = {routerProps => <BrowseResults department= "shirts" gender="women" {...routerProps} />} />
            <Route path="/womenshoes" render = {routerProps => <BrowseResults department= "shoes" gender="women" {...routerProps} />} />
            <Route path="/womenpants" render = {routerProps => <BrowseResults department= "pants" gender="women" {...routerProps} />} />
        </Switch>
        
       {/* <Footer/> */}
        </>
    )
}

export default App