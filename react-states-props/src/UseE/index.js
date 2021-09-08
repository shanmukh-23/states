

import React, {useState} from 'react'
import '../Styling.css';

 const UseE = () => {
     const [count,Setcount] = useState(0)
    return (
        <div>
            <h1>you clicked {count} times</h1>
            <button className = "btn" onClick = {()=> Setcount(count + 1)}>Clickme</button>
        </div>
    )
}

export default UseE