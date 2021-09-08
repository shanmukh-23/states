import React from 'react'
import { useHistory } from 'react-router-dom';

 const Profile = () => {
    let history = useHistory();
    return (
        
     
              <div className = "container" id = "c">

        <div className = "content">
            <h1>Welcome Back to EverestDx</h1>
            <p>Unified IT Operational Analytics platform</p>
            <p>Any data, Any Time, Any Where, Any Workload</p>
            <div className = "btn-section">
            <button onClick = {() => {history.push("/login");}} type = "button" className = "button">Logout</button>
            </div>
        </div>
        </div>
 
    
    )
}

export default Profile