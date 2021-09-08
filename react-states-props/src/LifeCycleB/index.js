
import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shanmukh"
            
        }
        console.log("lifecycleB constructor")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("lifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("ifecycleB DidMount")
    }
    render() {
        console.log("lifecycleB render")
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifeCycleB
