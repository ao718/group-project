import React, from { Component } 
import axios from 'axios'

const userAxios = axios.create()
// Axios interceptor
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem(`token`)
    config.headers.
})


const UserContext = React.createContext()
class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem(`token`) ||  ""
        }
    }
signup = credentials => {
    axios.post(`/auth/signup`, credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem(`token`, token)
            localStorage.setItem(`user`, JSON.stringify(user))
            this.setState({user, token})
        })
    }   catch(err => console.dir(err))
}

login = () => {
 axios.post(`/auth/login`, credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem(`token`, token)
            localStorage.setItem(`user`, JSON.stringify(user))
            this.setState({user, token})
        })
    }   catch(err => console.dir(err))
}


logout = () => {
    localStorage.removeItem(`token`)
    localStorage.removeItem(`user`)
    this.setState({
        user: {},
        token: ""
    })
}

render(){
    return (
        <UserContext.Provider
            value = {{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout: this.logout
            }}>
            { this.props.children }
        </UserContext.Provider>
    )
}

export default UserProvider

export const withUser = C => props => (
    
)