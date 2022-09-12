import "./fundtransfer.css";

export default function FundTransfer() {
    return (
        <div className="fundTransfer">
            <h1 className="fundTransferTitle">Transfer Fund</h1>
            <form className="fundTransferForm">
                <div className="fundTransferItem">
                    <label>Payers account no</label>
                    <input type="number" placeholder="Payers" />
                </div>
                <div className="fundTransferItem">
                    <label>Payees account no</label>
                    <input type="number" placeholder="Payees" />
                </div>
                <div className="depositItem">
                    <label>Amount</label>
                    <input type="number" placeholder="Amount" />
                </div>


            </form>
            <button className="fundTransferButton">Reset</button>
            <button className="fundTransferButton">Submit</button>
        </div>
    );
}
