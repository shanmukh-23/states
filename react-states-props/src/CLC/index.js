



import React, { Component } from 'react'

class CLC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    componentDidMount() {
        console.log("component didmount")
    }

    componentDidUpdate() {
        console.log("component did update");
    }
    
    render() {

        return (
            <div>
                
    
                <h3>count: {this.state.count}</h3>
                <button onClick = {()=> this.setState({count:this.state.count+1})}>Increment</button>
            </div>
        )
    }
}


export default CLC
