
import React, { Component } from 'react'
import LifeCycleB from '../LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"shanmukh"
            
        }
        console.log("lifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("lifecycleA getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("ifecycleA DidMount")
    }
    render() {
        console.log("lifecycleA render")
        return (
            <div>
                LifecycleA
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
