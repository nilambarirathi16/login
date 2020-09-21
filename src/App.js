import React,{useState} from 'react';
import {Lock} from 'react-bootstrap-icons';
import axios from 'axios';

function App()
{
  const [loginStatus,setloginstatus]=useState(0);
  const [email,setemail]=useState("");
  const [pwds,setpwd]=useState("");
  function emailChange(event)
  {
    setemail(event.target.value);
  }
  function pwdChange(event)
  {
    setpwd(event.target.value);
  }
  function verifyemail()
  {
    axios.get('https://run.mocky.io/v3/a704e123-2ac0-4976-b769-6e9adb8549c2').then(
      Response=>{console.log(Response.data.user.email)
      if(email===Response.data.user.email){setloginstatus(1);}
      else{ setloginstatus(0);}
      })
  }
  function verifypwd()
  {
    const object=[{email:email,password:pwds}];
    axios.post('https://run.mocky.io/v3/2ef706ec-6347-4ae5-9f9c-ed2c0d77edd9',object).then(
      Response=>{console.log(Response.data.loginResult)
      if(Response.data.loginResult==="SUCCESS"){setloginstatus(2);}
      else{setloginstatus(1);}
    })
  }
  return(
    <div className="container">
  <center>
  { loginStatus === 0 ? 
    <div>
    <Lock /><h1>Login</h1><br /><br />
    <label><b>Enter your email</b></label><br /><br />
    <input onChange={emailChange} type="text"  placeholder="Enter email" name="uname" required></input>   <br />
    <button onClick={verifyemail} type="submit">Enter</button></div> : 

    loginStatus ===1 ? 
      
    <div><label><b>Enter Password</b></label><br /><br />
      <input onChange={pwdChange} type="password" placeholder="Enter password" name="uname" required></input>   <br />
      <button onClick={verifypwd} type="submit">Login</button>
      </div>  :

    <div>
      <h1>Welcome !!!!!</h1>
      <h2>You have successfully logged in.</h2>
    </div>
    }
   </center>
   </div>
   );
}
export default App; 