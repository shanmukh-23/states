import React, { Component } from 'react'
import '../Styling.css';

class States extends Component {
    constructor(props) {
        super(props)//we extend react component class and call has to be made to the base class constructor
    
        this.state = {
             message: "Welcome to my Youtube Channel"
        }
    }

    changeMessage() {
        this.setState({
            message:"Thankyou for Subscribing"
        })
    }
    
    render() {
        return (
            <div>
              <h2>{this.state.message}</h2>
              <button onClick = {() => this.changeMessage()} className = "btn">Subscribe</button>
            </div>
        )
    }
}

export default States