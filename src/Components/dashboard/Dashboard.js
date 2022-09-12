import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import Home from "../../pages/Manager/home/Home";
import './dashboard.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "../../pages/Manager/userList/UserList";
import User from "../../pages/Manager/user/User";

import NewUser from "../../pages/Manager/newCustomer/NewCustomer";
import NewProduct from "../../pages/newProduct/NewProduct";

import EditUser from "../../pages/Manager/editCustomer/EditCustomer"



import DeleteCustomer from "../../pages/Manager/deleteCustomer/DeleteCustomer";
import NewAccount from "../../pages/Manager/newAccount/NewAccount";
import EditAccount from "../../pages/Manager/editAccount/EditAccount";
import DeleteAccount from "../../pages/Manager/deleteAccount/DeleteAccount";
import Deposit from "../../pages/Manager/deposit/Deposit"
import Withdrawal from "../../pages/Manager/withdrawal/Withdrawal"
import FundTransfer from "../../pages/Manager/fundTransfer/FundTransfer";
import ChangePassword from "../../pages/Manager/changePassword/ChangePassword";
import BalanceEnquiry from "../../pages/Manager/balanceEnquiry/BalanceEnquiry";
import MiniStatement from '../../pages/Manager/miniStatement/MiniStatement'
import CustomStat from "../../pages/Manager/customizedStatement/CustomStat";
// import Login from "../../components/login/Login";
function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container1">
        <Sidebar />
        <Routes>
          {/* <Route exact path="/login">
            <Login/>
          </Route> */}
          
          
          
          
          
          {/* <Route exact path="/deposit">
            <Deposit />
          </Route>
          <Route path="/withdrawal">
            <Withdrawal />
          </Route>
          <Route path="/fundtransfer">
            <FundTransfer />
          </Route>
          <Route path="/changepassword">
            <ChangePassword/>
          </Route>
          <Route path="/balanceenquiry">
            <BalanceEnquiry />
          </Route>
          <Route path="/ministatement">
            <MiniStatement />
          </Route>
          <Route path="/customizedstatement">
            <CustomStat />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route> */} 
        </Routes>
      </div>
    </>
  );
}

export default Dashboard;
