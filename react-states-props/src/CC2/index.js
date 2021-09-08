

import React, { Component } from 'react'

class CC2 extends Component {
    render() {
        const some = "welcome to react"
        const obj = {
            name1: "shanmukh",
            age: 24
         }
        return (
            <div>
                 <p>{obj.name1}</p>
                <p>{obj.age}</p>
                <p>{some}</p>
            </div>
        )
    }
}

export default CC2
