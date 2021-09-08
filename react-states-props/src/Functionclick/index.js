

import React from 'react'

 const Functionclick = () => {
    const clickHandler = () => {
         console.log("button clicked")
     }
    return (
        <div>
            <button onClick = {clickHandler} className ="btn1">Click</button>
        </div>
    )
}

export default Functionclick