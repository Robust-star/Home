import "./deleteAccount.css";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";
export default function DeleteAccount() {
  return (
    <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
    <div className="deleteCustomer">
      <h1 className="deleteCustomerTitle">Delete Account</h1>
      <form className="deleteCustomerForm">
        <div className="deleteCustomerItem">
          <label>Account No</label>
          <input type="text" placeholder="Account No" />
        </div>
        <Link to="/user/1">
            <button className="deleteCustomerButton">Submit</button>
        </Link>
        <button className="deleteCustomerButton">Reset</button>
        
      </form>
      
    </div>
    </div>
    </>
  );
}
