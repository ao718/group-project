import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import "./styles/aaron.css"
import "./styles/afame.css"
import "./styles/ryan.css"




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"))
