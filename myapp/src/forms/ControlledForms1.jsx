import { useState } from "react";

 const ControlledForms1 =()=>{

    let [username, setUsername] = useState("")
    let [useremail, setUseremail] = useState("")
    let [userpassword, setUserpassword] = useState("")

    let handleUsername =(e)=>{
        // console.log("user name")
        // console.log(e)
        setUsername(e.target.value)
    }
    let handleUseremail =(e)=>{
        // console.log("user email")
        setUseremail(e.target.value)
    }
    let handleUserpassword =(e)=>{
        // console.log("user Password")
        setUserpassword(e.target.value)
    }
    let formSubmit =(e)=>{
        e.preventDefault();
        console.log({username, useremail, userpassword});
// ! after submit then clear all input Fields
        setUsername("")
        setUseremail("")
        setUserpassword("")

    }
    return(
        <div> 
        <h1>Controlled Forms</h1>
        
        {/* <form onSubmit={formSubmit}> */}
        <form>
            <label> Name :</label>
            <input type="text"  value={username} onChange={handleUsername}/>
            <br /><br />
            <label> Email :</label>
            <input type="email" value={useremail} onChange={handleUseremail} />
            <br /><br />


            <label> Password :</label>
            <input type="password" value={userpassword}  onChange={handleUserpassword}/>
            <br /><br />
            <button type="submit" onClick={formSubmit}>Submit</button>
        </form>
        </div>
    );
 };
 export default ControlledForms1;