import "./newAccount.css";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";

export default function NewAccount() {
  return (
    <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
    <div className="newaccount">
      <h1 className="newaccountTitle">New Account</h1>
      <form className="newaccountForm">
        <div className="newaccountItem">
          <label>Customer Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="newaccountItem">
          <label>Customer Id</label>
          <input type="text" placeholder="Customer Id" />
        </div>
        <div className="newaccountItem">
          <label>Account Type</label>
          <select className="newaccountSelect" name="accountType" id="account">
            <option value="current">Current Account</option>
            <option value="saving">Saving Account</option>
          </select>
        </div>
        <div className="newaccountItem">
          <label>Initial Deposit</label>
          <input type="number" placeholder="0000000" />
        </div>
        {/* <div className="sumbitButtons"> */}
        {/* <br></br> */}
        
        {/* </div> */}

      </form>
      <button className="newaccountButton">Reset</button>
      <button className="newaccountButton">Submit</button>
    </div>
    </div>
    </>
  );
}
