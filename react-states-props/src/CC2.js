
import React, {useState} from 'react'

 const CC2 = () => {
    let [count, Setcount] = useState(0)
    const increment = ()=> {
        Setcount(count + 1)
    }

    const decrement = ()=> {
        Setcount(count - 1)
    }
    return (
        <div className = "new">
           
            <button className = "btn" onClick = {increment}>+</button>
            <h1>{count}</h1>
            <button className = "btn" onClick = {decrement}>-</button>
        </div>
    )
}

export default CC2