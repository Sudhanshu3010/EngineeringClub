import React from 'react';
import web from "../Images/Section.png";
import { NavLink } from 'react-router-dom';
import '../App.css';
import '../Auth.css';

const MyForm = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-3  col-sm-10 my-auto login-form">
          <h2 className='fw-bold mb-4'>Sign Up</h2>
          
          <form action="/home">
            <label for="name">Name*</label><br />
            <input type="text" id="name" className="mb-3" name="name"  placeholder="Enter your name" /><br />
            <label for="email">Email*</label><br />
            <input type="text" id="email" className="mb-3" name="email"  placeholder="Enter your Email" /><br />
            <label for="password">Password*</label><br />
            <input type="password" id="password" name="password"  placeholder='Enter your Password' /><br /><br />
            <p className='pass-caption'>Must be at least 8 characters.</p>
            <input type="submit" className="bg-bluebtn2 fw-bold mt-3" value="Create account" />
            <input type="submit" className="bg-white fw-bold mt-3" value=" &nbsp; Sign up with Google" />
            
          </form>
          
          <div className="sign-in-options">
          <p className="">Already have an account?<NavLink to="/account/login" className="blue-text"> Log in </NavLink>
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
export default MyForm;