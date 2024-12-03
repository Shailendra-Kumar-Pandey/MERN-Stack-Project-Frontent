import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentails, setCredentails]=useState({name:"",email:"",username:"", password:"", cpassword:""})
  let navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const {name, email, username, password} = credentails;
  const response = await fetch("http://localhost:5000/api/auth/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, email, username, password}),
  });
  const json = await response.json();
  console.log(json);
  if(json.success){
      //Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate('/home');
      props.showAlert("You are create Account iNotwbook!","success");
    }else{
    props.showAlert("Invalid credentials ! ","danger");
  }
};

const onChange = (e) => {
  setCredentails({ ...credentails, [e.target.name]: e.target.value });
};
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label" >Name</label>
          <input type="text" className="form-control" id="name"name="name" aria-describedby="emailHelp" placeholder="Raghav Mishra" onChange={onChange} minLength={5} required/>
          <small id="emailHelp" className="form-text text-muted"> We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" >Email address</label>
          <input type="email" className="form-control" id="email"  name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
          <small id="emailHelp" className="form-text text-muted"> We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label" >User Name</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Raghav123" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" >Password</label>
          <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" >Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name="cpassword" placeholder="Confirm Password" onChange={onChange} minLength={5} required/>
        </div>
        <button type="submit" className="btn btn-dark">Signup</button>
      </form>
    </div>
  )
}

export default Signup
