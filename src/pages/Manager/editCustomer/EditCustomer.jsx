import "./editCustomer.css";
import { Link } from "react-router-dom";
export default function EditCustomer() {
  return (
    <div className="editCustomer">
      <h1 className="editCustomerTitle">Edit Customer</h1>
      <form className="editCustomerForm">
        <div className="editCustomerItem">
          <label>Customer Id</label>
          <input type="text" placeholder="Customer Id" />
        </div>
        <Link to="/user/1">
            <button className="editCustomerButton">Submit</button>
        </Link>
        <button className="editCustomerButton">Reset</button>
        
      </form>
      
    </div>
  );
}
