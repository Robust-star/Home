import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import About from './Components/About/About';

import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/dashboard/Dashboard';

const App = (props) => {
	const location = useLocation();
	return (
		<>
			{
				location.pathname === '/' || location.pathname === '/login'|| location.pathname === '/services' ||location.pathname === '/about' ||location.pathname === '/contact' ?
					<Navbar /> :
					<></>

			}
			<Routes>
				<Route exact path="/" element={<Layout />} >
					<Route exact path="/services" element={<Services />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/login" element={<Login />} />
				</Route>
				<Route exact path='/dashboard' element={<Dashboard/>}>
				</Route> 

			</Routes>

		</>


		// </BrowserRouter>
	)
}

export default (App)
