import './withdrawal.css'

export default function Withdrawal() {
    return (
        <div className="withdrawal">
            <h1 className="withdrawalTitle">Withdraw Amount</h1>
            <form className="withdrawalForm">
                <div className="withdrawalItem">
                    <label>Account Number</label>
                    <input type="number" placeholder="xxx-xxx-xxxx" />
                </div>
                <div className="withdrawalItem">
                    <label>Amount Withdarw</label>
                    <input type="number" placeholder="Amount" />
                </div>
                <div className="withdrawalItem">
                    <label>Description</label>
                    <textarea name="description" className='textAreaD' id="" cols="30" rows="10" placeholder='Description'></textarea>
                </div>
                

            </form>
            <button className="withdrawalButton">Reset</button>
            <button className="withdrawalButton">Submit</button>
        </div>
    );
}
