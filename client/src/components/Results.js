import React, {Component} from 'react'

class Results extends Component{
    constructor(props){
        super()
        this.state = {
            results: []
        }
    }
    componentDidMount(){
        // getAllQueries()
    }
    
    render(){
    const mappedResults = this.state.results.map(result => {
        return(
            <div>
                    
            </div>
        )
    })
    console.log(this.props)
    return(
        <div>
            
            {mappedResults}
        </div>
    )
    }
}
export default Results 
