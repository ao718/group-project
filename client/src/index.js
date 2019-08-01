import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App.js"
import "./styles/aaron.css"
import "./styles/afame.css"
import "./styles/ryan.css"
import 'bootstrap/dist/css/bootstrap.css'
import InventoryProvider from "./context/InventoryProvider.js"
import UserProvider from "./context/UserProvider.js";


ReactDOM.render(
    <BrowserRouter>
        <InventoryProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </InventoryProvider>
    </BrowserRouter>,
    document.getElementById("root"))
