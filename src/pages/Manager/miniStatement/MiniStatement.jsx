import "./miniStatement.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData1";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../../Components/Dashboard/topbar/Topbar";
import Sidebar from "../../../Components/Dashboard/sidebar/Sidebar";

export default function MiniStatement() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "date", headerName: "Date", width: 200 },
        
        { field: "narration", headerName: "Narration", width: 160 },
        {
            field: "chequeNo",
            headerName: "Cheque/Ref no.",
            width: 120,
        },
        {
            field: "withdraw",
            headerName: "Withdrawal",
            width: 160,
        },
        {
            field: "deposit",
            headerName: "Deposit",
            width: 160,
        },
        {
            field: "balance",
            headerName: "Closing Balance",
            width: 160,
        },

        // {
        //     field: "action",
        //     headerName: "Action",
        //     width: 150,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <Link to={"/user/" + params.row.id}>
        //                     <button className="transactionListEdit">Edit</button>
        //                 </Link>
        //                 <DeleteOutline
        //                     className="transactionListDelete"
        //                     onClick={() => handleDelete(params.row.id)}
        //                 />
        //             </>
        //         );
        //     },
        // },
        // {
        //     field: "user",
        //     headerName: "User",
        //     width: 200,
        //     renderCell: (params) => {
        //         return (
        //             <div className="transactionListUser">
        //                 <img className="transactionListImg" src={params.row.avatar} alt="" />
        //                 {params.row.username}
        //             </div>
        //         );
        //     },
        // },
    ];

    return (
        <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
        <div className="transactionList">
            <div className="miniStatement">
                <h1 className="miniStatementTitle">Mini Statement</h1>
                <form className="miniStatementForm">
                    <div className="miniStatementItem">
                        <label>Account No</label>
                        <input type="number" placeholder="xxx-xxx-xxxx" />
                    </div>
                    <button className="miniStatementButton">Reset</button>
                    <button className="miniStatementButton">Submit</button>
                </form>
            </div>
            <h2 className="miniStatementDetails">Details</h2>

            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}

            />
        </div>
        </div>
        </>

    );
}
