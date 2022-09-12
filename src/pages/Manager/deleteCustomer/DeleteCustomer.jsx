import "./deleteCustomer.css";
import { Link } from "react-router-dom";
export default function DeleteCustomer() {
  return (
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
  );
}
