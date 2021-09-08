

import React, { Component } from 'react'

class Increment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     () => {
    //         console.log('call back value', this.state.count)
    //     })
    //     console.log(this.state.count)
        this.setState((prevState) =>({
           count: prevState.count + 1
        }))
    }
    incrementOne() {
        this.increment();
    }
    
    render() {
        return (
            <div>
                <h2>count - {this.state.count}</h2>
                <button className = "btn" onClick = {() => this.incrementOne()}>Increment</button>
            </div>
        )
    }
}

export default Increment