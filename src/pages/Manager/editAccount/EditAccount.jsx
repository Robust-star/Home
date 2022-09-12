import "./editAccount.css";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function EditAccount() {
    return (
        <div className="editAccount">
            <h1 className="editAccountTitle">Edit Account Details</h1>
            <form className="editAccountForm">
                <div className="editAccountItem">
                    <label>Account Number</label>
                    <input type="number" placeholder="xxx-xxx-xxx-xx" />
                </div>
                <Link to="/home">
                    <button className="editAccountButton">Submit</button>
                </Link>
                <button className="editAccountButton">Reset</button>
            </form>

            {/* EDIT SINGLE ACCOUNT PROFILE*/}
            <div className="user">
                <div className="userTitleContainer">
                    <h1 className="userTitle">Account Details</h1>
                    <Link to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="userShowImg"
                            />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Simran Singh</span>
                                <span className="userShowUserTitle">Software Engineer</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                                <PermIdentity className="userShowIcon" />
                                <span className="userShowInfoTitle">SimranRaj1999</span>
                            </div>
                            <div className="userShowInfo">
                                <CalendarToday className="userShowIcon" />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                                <PhoneAndroid className="userShowIcon" />
                                <span className="userShowInfoTitle">+91 123 456 67</span>
                            </div>
                            <div className="userShowInfo">
                                <MailOutline className="userShowIcon" />
                                <span className="userShowInfoTitle">simransingh@gmail.com</span>
                            </div>
                            <div className="userShowInfo">
                                <LocationSearching className="userShowIcon" />
                                <span className="userShowInfoTitle">Punjab, India</span>
                            </div>
                        </div>
                    </div>
                    <div className="accountUpdate">
                        <span className="accountUpdateTitle">Edit</span>
                        <form className="accountUpdateForm">
                            <div className="accountUpdateLeft">
                                <div className="accountUpdateItem">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Simran Singh"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        placeholder="12-09-1999"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        placeholder="Punjab,India"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>Pin</label>
                                    <input
                                        type="text"
                                        placeholder="Pin"
                                        className="accountUpdateInput"
                                    />
                                </div>
                                <div className="accountUpdateItem">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        placeholder="+1 123 456 67"
                                        className="accountUpdateInput"
                                    />

                                </div>
                                <div className="accountUpdateItem">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        className="accountUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className="accountUpdateRight">
                                <button className="accountUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
