import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Routes, useLocation,Navigate } from "react-router-dom";
// import Home from './Components/Home/Home'
import Login from './Components/Login/Login';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Services from './Components/Services/Services'
import Navbar from './Components/Navbar/Navbar'
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';


// Dashboard
import Sidebar from './Components/Dashboard/sidebar/Sidebar';
import Topbar from './Components/Dashboard/topbar/Topbar';
import Home from './pages/Manager/home/Home';
import UserList from './pages/Manager/userList/UserList';
import User from './pages/Manager/user/User';
import NewUser from './pages/Manager/newCustomer/NewCustomer';
import NewProduct from './pages/newProduct/NewProduct';
import EditUser from "./pages/Manager/editCustomer/EditCustomer"
import DeleteCustomer from './pages/Manager/deleteCustomer/DeleteCustomer';
import NewAccount from './pages/Manager/newAccount/NewAccount';
import EditAccount from './pages/Manager/editAccount/EditAccount';
import DeleteAccount from './pages/Manager/deleteAccount/DeleteAccount';
import Deposit from './pages/Manager/deposit/Deposit';
import Withdrawal from './pages/Manager/withdrawal/Withdrawal';
import FundTransfer from './pages/Manager/fundTransfer/FundTransfer';
import ChangePassword from './pages/Manager/changePassword/ChangePassword';
import BalanceEnquiry from './pages/Manager/balanceEnquiry/BalanceEnquiry';
import MiniStatement from './pages/Manager/miniStatement/MiniStatement';
import CustomStat from './pages/Manager/customizedStatement/CustomStat';

const PrivateRoute = ({children }) => {
	return localStorage.getItem("isSubmitted") ? children : <Navigate to="/login" />;
};


const App = (props) => {
	
	const location = useLocation();
	return (
		<>
			{
				location.pathname === '/' || location.pathname === '/login' || location.pathname === '/services' || location.pathname === '/about' || location.pathname === '/contact' ?
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
				{/* <Route exact path='/dashboard' element={<Dashboard />} /> */}

				<Route
					path="/dashboard"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>

				<Route exact path="/newUser" element={<PrivateRoute><NewUser /></PrivateRoute>} />
				{/* <Route path="/newUser" element={<NewUser />} /> */}
				{/* <Route path="/users" element={<UserList/>}/> */}
				<Route path="//user/:userId" element={<PrivateRoute><User /></PrivateRoute>} />
				<Route path="/edituser" element={<PrivateRoute><EditUser /></PrivateRoute>} />
				<Route path="/deletecustomer" element={<PrivateRoute><DeleteCustomer /></PrivateRoute>} />
				<Route path="/editaccount" element={<PrivateRoute><EditAccount /></PrivateRoute>} />
				<Route path="/newaccount" element={<PrivateRoute><NewAccount /></PrivateRoute>} />
				<Route path="/editaccount" element={<PrivateRoute><EditAccount /></PrivateRoute>} />
				<Route path="/deleteaccount" element={<PrivateRoute><DeleteAccount /></PrivateRoute>} />
				<Route path="/deposit" element={<PrivateRoute><Deposit /></PrivateRoute>} />
				<Route path="/withdrawal" element={<PrivateRoute><Withdrawal /></PrivateRoute>} />
				<Route path="/fundtransfer" element={<PrivateRoute><FundTransfer /></PrivateRoute>} />
				<Route path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
				<Route path="/balanceenquiry" element={<PrivateRoute><BalanceEnquiry /></PrivateRoute>} />
				<Route path="/ministatement" element={<PrivateRoute><MiniStatement /></PrivateRoute>} />
				<Route path="/customizedstatement" element={<PrivateRoute><CustomStat /></PrivateRoute>} />
				{/* <Route path="/login" element={NewProduct}/> */}

			</Routes>

		</>


		// </BrowserRouter>
	)
}

export default (App)
