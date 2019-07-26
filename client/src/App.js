import React from "react"
import {Switch,Route} from "react-router-dom"
import Home from "./components/Home.js"
// import Footer from "./components/Footer.js"
import Men from "./components/Men.js"
import Header from "./components/Header.js"

const App = props => {
    return (
        <>
        <Header/>
        <Switch>
            <Route exact path="/" render = {routerProps => <Home {...routerProps}/> }/>
            <Route path="/men" render = {routerProps => <Men {...routerProps} /> } />
        </Switch>
       
        </>
    )
}

export default App