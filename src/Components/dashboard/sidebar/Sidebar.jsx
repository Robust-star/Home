import "./sidebar.css";
import {
  LineStyle,
  DeleteForever,
  Delete,
  Add,
  Edit,
  AccountBalanceWallet,
  Iso,
  Payment,
} from "@material-ui/icons";
import NotesIcon from '@mui/icons-material/Notes';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FeedIcon from '@mui/icons-material/Feed';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Link } from "react-router-dom";
import CurrencyExchange from '@mui/icons-material/CurrencyExchange';
import { Feed } from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>
            </Link>
            <Link to="/newuser" className="link">
            <li className="sidebarListItem">
              <Add className="sidebarIcon" />
              Add new Customer
            </li>
            </Link>
            <Link to="/edituser" className="link">
            <li className="sidebarListItem">
              <Edit className="sidebarIcon" />
              Edit Customer
            </li>
            </Link>
            <Link to="/deletecustomer" className="link">
              <li className="sidebarListItem">
                <Delete className="sidebarIcon" />
                Delete Customer
              </li>
            </Link>
            <Link to="/newaccount" className="link">
              <li className="sidebarListItem">
                <AccountBalanceWallet className="sidebarIcon" />
                New Account
              </li>
            </Link>
            <Link to="/editaccount" className="link">
              <li className="sidebarListItem">
                <Iso className="sidebarIcon" />
                Edit Account
              </li>
            </Link>
            <Link to="/deleteaccount" className="link">
              <li className="sidebarListItem">
                <DeleteForever className="sidebarIcon" />
                Delete Account
              </li>
            </Link>
            <Link to="/deposit" className="link">
              <li className="sidebarListItem">
                <CurrencyExchange className="sidebarIcon" />
                Deposit
              </li>
            </Link>
            <Link to="/withdrawal" className="link">
              <li className="sidebarListItem">
                <Payment className="sidebarIcon" />
                Withdrawal
              </li>
            </Link>
            <Link to="/fundtransfer" className="link">
              <li className="sidebarListItem">
                <CompareArrowsIcon className="sidebarIcon" />
                Fund Transfer
              </li>
            </Link>
            <Link to="/changepassword" className="link">
              <li className="sidebarListItem">
                <ChangeCircleIcon className="sidebarIcon" />
                Change Password
              </li>
            </Link>
            <Link to="/balanceenquiry" className="link">
              <li className="sidebarListItem">
                <Feed className="sidebarIcon" />
                Balance Enquiry
              </li>
            </Link>
            <Link to="/ministatement" className="link">
              <li className="sidebarListItem">
                <NotesIcon className="sidebarIcon" />
                Mini Statement
              </li>
            </Link>
            <Link to="/customizedstatement" className="link">
              <li className="sidebarListItem">
                <DocumentScannerIcon className="sidebarIcon" />
                Customized Statement

              </li>
            </Link>
            <Link to="/userlist" className="link">
              <li className="sidebarListItem">
                <LoginIcon className="sidebarIcon" />
                Login & Logout
              </li>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
