import "./balanceEnquiry.css";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";

export default function BalanceEnquiry() {
    return (
        <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
        <div className="balanceEnquiry">
            <h1 className="balanceEnquiryTitle">Balance Enquiry</h1>
            <form className="balanceEnquiryForm">
                <div className="balanceEnquiryItem">
                    <label>Account No</label>
                    <input type="number" placeholder="xxx-xxx-xxxx" />
                </div>
            

            </form>
            <button className="balanceEnquiryButton">Reset</button>
            <button className="balanceEnquiryButton">Submit</button>
        </div>
        </div>
        </>
    );
}
