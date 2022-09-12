import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import "./newCustomer.css";

export default function NewUser() {
  return (
    <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Customer Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="newUserItem">
          <label>Date of Birth</label>
          <input type="date" placeholder="Date of Birth" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="email@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+91 9999999999" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="City | Address" />
        </div>
        <div className="newUserItem">
          <label>State</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="newUserItem">
          <label>Pin Code</label>
          <input type="text" placeholder="Pin Code" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
          </select>
        </div> */}
        {/* <div className="sumbitButtons"> */}
        {/* <br></br> */}
        
        {/* </div> */}

      </form>
      <button className="newUserButton">Reset</button>
      <button className="newUserButton">Submit</button>
    </div>
        </div>
    </>
  );
}
