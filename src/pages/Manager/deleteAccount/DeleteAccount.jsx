import "./deleteAccount.css";
import { Link } from "react-router-dom";
export default function DeleteAccount() {
  return (
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
  );
}
