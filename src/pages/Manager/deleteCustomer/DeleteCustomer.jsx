import "./deleteCustomer.css";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";
export default function DeleteCustomer() {
  return (
    <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
    <div className="deleteCustomer">
      <h1 className="deleteCustomerTitle">Delete Customer</h1>
      <form className="deleteCustomerForm">
        <div className="deleteCustomerItem">
          <label>Customer Id</label>
          <input type="text" placeholder="Customer Id" />
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
