

import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
    }

    bye = () => {
        this.setState({
            message: "bye"
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button className ="btn3" onClick = {this.bye}>Click</button>
            </div>
        )
    }
}

export default Eventbind
