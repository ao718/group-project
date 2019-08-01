import React from "react"

const AuthForm = props => {
    const {username, password, handleChange, handleSubmit, buttonText} = props
    console.log(props)
    return(
    
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                onChange={handleChange}
                value= {username} ></input>
            <input
                type="text"
                name="password"
                onChange={handleChange}
                value= {password} ></input>
            <button>{buttonText}</button>
            
        </form>
    )
}

export default AuthForm