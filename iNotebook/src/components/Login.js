import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentails, setCredentails]=useState({email:"", password:""})
    let navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: credentails.email, password: credentails.password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Welcome You are Login!","success");
        navigate('/home');
    }else{
    props.showAlert("Invalid credentials ! ","danger");

    }
  };

  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Welcome to iNootbook Login Page! </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" >Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={credentails.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-dark">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" >Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentails.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
