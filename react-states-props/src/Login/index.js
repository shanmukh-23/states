


import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../Style.css';


 const Login = () => {
    let history = useHistory();
    const [errormessageemail,seterrormessageemail] = useState()
    const [errormessagepassword,seterrormessagepassword] = useState()
    const [useremail,setuseremail] = useState()
    const [userpassword,setuserpassword] = useState()
    const [errormessage,seterrormessage] = useState()


    const handleemail = (e) => {
        let email = e.target.value
        seterrormessage("")
        setuseremail(email)
        
        if(email!==""){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                seterrormessageemail("")
            //   setIsEmail(true)
            }else{
                // seterrormessageemail(false)
                seterrormessageemail("Enter Some Valid Email")
            }
           }else{
            // setIsEmail(false)
            seterrormessageemail("Email is required")
           }
        // seterrormessageemail()
    }

    const handlepassword = (e) => {
        
        let password = e.target.value
        seterrormessage("")

        // seterrormessagepassword()
        setuserpassword(password);
        if(password!==""){
            seterrormessagepassword("")
            
        }else{
            seterrormessagepassword("Password is required")
        }
    }


    function login() {
    //  if(useremail=== "" && userpassword=== "") {
    //     // seterrormessage("email and password required")
    //     alert("hii")
    //  }

    //  else {

    
        if(useremail==="admin@gmail.com"){
       if(userpassword==="123"){
        seterrormessage("")
    //    localStorage.setItem('authtoken','qwertyuiopljhgfsaj');
       window.location.href="/"
       } else{
        seterrormessage("Wrong password")
       }
       }else{
        seterrormessage("enter both Email and Password")
       }
    }
// }
    return (
        <div className = "c">
        <div className = "form-box">
        <span style = {{color: "red", margin:"0px", marginLeft: "18px", height: "18px"}}>{errormessage}</span>

            <input type = "text" className = "input-box" placeholder = "Username" onChange = {handleemail} value = {useremail}/>
            <span style = {{color: "red", margin:"0px", marginLeft: "18px", height: "18px"}}>{errormessageemail}</span>

            <input type = "password" className = "input-box" placeholder = "Password" onChange = {handlepassword} value = {userpassword}/>
            <span style = {{color: "red", margin:"0px", marginLeft: "18px", height: "15px"}}>{errormessagepassword}</span>
            <div className = "btn-section">
                <button onClick = {login} type = "button" className = "on">Login</button>
            </div>
        </div>
        </div>
    )
}

export default Login
