import "./changePassword.css";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";
export default function ChangePassword() {
    return (
        <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
        <div className="changePassword">
            <h1 className="changePasswordTitle">Change Password</h1>
            <form className="changePasswordForm">
                <div className="changePasswordItem">
                    <label>Old Password</label>
                    <input type="number" placeholder="Old Password" />
                </div>
                <div className="changePasswordItem">
                    <label>New Password</label>
                    <input type="number" placeholder="New Password" />
                </div>
                <div className="depositItem">
                    <label>Confirm password</label>
                    <input type="number" placeholder="Confirm Password" />
                </div>


            </form>
            <button className="changePasswordButton">Reset</button>
            <button className="changePasswordButton">Submit</button>
        </div>
        </div>
        </>
    );
}
