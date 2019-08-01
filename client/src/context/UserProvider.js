import React, {Component} from "react"
import axios from "axios"
const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: "",
            cart: [],
            favorites: []

        }
    }
    addToCart = (item, id) => {
        userAxios.put(`/api/cart/${id}`, item)
        .then(res => {
            const user = res.data
            this.setState({cart: user.cart})
            // console.log(user)
        })
        .catch(err => console.log(err))
    }
    getUserCart = (id) => {
        userAxios.get(`/api/cart/${id}`)
        .then(res => {
            const cart = res.data
            // console.log(cart)
            this.setState({cart: [cart]})
        })
        .catch(err => console.log(err))
    }

    deleteFromCart = (id) => {
        userAxios.put(`/api/cart/${id}`)
        .then(res => {
            const {user} = res.data
            this.setState({cart: user.cart})
        })
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({ user, token, cart: user.cart, favorites: user.favorites})
        })
        .catch(err => console.log(err))
    }

    login = credentials => {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({ user, token})
        })
        .catch(err => console.log(err))
    }

    logout = () => {
        localStorage.removItem("token")
        localStorage.removeItem("user")
        this.setState({token: "", user: {}})
    }
    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    addToCart: this.addToCart,
                    getUserCart: this.getUserCart,
                    deleteFromCart: this.deleteFromCart
                    
                }}>
                    {this.props.children}
                </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/> }
    </UserContext.Consumer>
)