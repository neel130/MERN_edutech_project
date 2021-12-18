import React, { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import {UserContext} from "../App";


const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate=useNavigate();
const [email,setEmail]=useState("");
const [password,setPassword] = useState("");

const subData =async (e)=>{
  e.preventDefault();
  const resp = await fetch('/login',{
    method:"POST",
    headers:{
      'Content-Type':'Application/json'
    },
    body:JSON.stringify({
      email,password
    })
  });
  const data = await resp.json();

  if(resp.status===400 || !data){
   window.alert("invalid user");
    
   console.log(data);
  }
  else{
    dispatch({ type: 'USER', payload: true });
 window.alert("login sucessful");
    navigate('/');
console.log(data);
    
  }
}
    return (
<div>


<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
          alt="Sample img"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="text-center h1 fw-bold    ">Log In</p>
          
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>

          
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
             value={email} onChange={(e)=>{setEmail(e.target.value) }}
             placeholder="Enter a valid email address" />
            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

          
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
               value={password}  onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter password" />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
           
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
            onClick={subData}
              style={{paddingLeft:" 2.5rem", paddingRight: "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
            <NavLink  to="/signup">Creat Account</NavLink>  </p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>

</div>



    )
}

export default Login
