import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../Images/Section.png";
import '../App.css';
import '../Auth.css';

const MyForm2 = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3  col-sm-10 my-auto login-form">
          <h2 className='fw-bold'>Sign in</h2>
          <p>Sign in to access your account and bookings</p>
          <form action="/home">
            <label for="email">Email*</label><br />
            <input type="email" id="email" className="mb-3" name="email"  placeholder="Enter your Email" required /><br />
            <label for="password">Password*</label><br />
            <input type="password" id="password" name="password"  placeholder='Enter your Password' /><br /><br />
            <input type="submit" className="bg-bluebtn2 fw-bold mt-0" value="Sign in" />
            <input type="submit" className="bg-white fw-bold mt-3" value="Sign in with Google"></input>
          </form>
          <div className="sign-in-options">
          <p className=""><span className="blue-text"> Forgot Password </span></p>
          <p className="">Don’t have an account? 
          <NavLink to="/account/signUp" className="blue-text"> Sign up </NavLink>
          </p>
          </div>
        </div>
        
        <div className="col-lg-5 ps-5 ms-5 auth-img">
          <img src={web} alt={web} width={"500px"}></img>
        </div>
      </div>
    </>
  );
};


export default MyForm2;
