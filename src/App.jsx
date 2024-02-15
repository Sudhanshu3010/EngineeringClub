import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import ActivitiesPage from './Pages/Activities';
import MyBookings from './Pages/MyBookings';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Navbar from './Navbar';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import AddActivity from './Pages/AddActivity';
import Product from './Pages/Product';
import {Routes, Route, Navigate} from "react-router-dom";
import './App.css'; 


const App=() =>{
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/blog" Component={Blog} />
      <Route path="/activities" Component={ActivitiesPage} />
      <Route path="/bookings" Component={MyBookings} />
      <Route path="/account/login" Component={Login} />
      <Route path="/account/signUp" Component={SignUp} />
      <Route path="/addActivity" Component={AddActivity} />
      <Route path="/product" Component={Product} />
       {/* Redirecting all other routes to the Home component */}
      <Route path="*" element={<Navigate to="/home" />} />

    </Routes>
    </>
  );
};

export default App;
