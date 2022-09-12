import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
// import { Switch, Route, Redirect } from 'react-router-dom'
// import Home from './Components/Home/Home'

// import About from './Components/About/About';

// import Contact from './Components/Contact/Contact'
// import Services from './Components/Services/Services'
// import Navbar from './Components/Navbar/Navbar'
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Navbar from '../Navbar/Navbar';
import Login from '../Login/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Layout = () => {
  return (
    <>
		{/* <Navbar /> */}
		<Routes>
			<Route exact path="/" element={<Home/>} />
			<Route exact path="/services" element={<Services/>} />
			<Route exact path="/about" element={<About/>} />
			<Route exact path="/contact" element={<Contact/>} />
			<Route exact path="/login" element={<Login/>} />
		</Routes>
    </>
  )
}

export default Layout
