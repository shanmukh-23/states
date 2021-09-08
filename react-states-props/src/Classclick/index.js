import React, { Component } from 'react'

class Classclick extends Component {
    clickClass() {
        console.log("thanks for clicking")
    }
    render() {
        return (
            <div>
                <button className = "btn2" onClick = {this.clickClass}>Click me</button>
            </div>
        )
    }
}

export default Classclick
