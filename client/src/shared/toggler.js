import { Component } from "react"
class Toggle extends Component{
    constructor(){
        super()
        this.state = {
            on: false,
            modal: false
        }
    }
    toggler = () => {
        this.setState(prevState => ({on: !prevState.on, modal: !prevState.modal}))
    }
    render(){
        return this.props.render({
            on: this.state.on,
            toggler: this.toggler,
            modal: this.state.modal
        })
    }
}

export default Toggle 