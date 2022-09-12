import Sidebar from '../../../Components/Dashboard/sidebar/Sidebar'
import Topbar from '../../../Components/Dashboard/topbar/Topbar'
import './deposit.css'

export default function Deposit() {
    return (
        <>
    <Topbar/>
    <div className="container1">

    <Sidebar/>
        <div className="deposit">
            <h1 className="depositTitle">Deposit Amount</h1>
            <form className="depositForm">
                <div className="depositItem">
                    <label>Account Number</label>
                    <input type="number" placeholder="xxx-xxx-xxxx" />
                </div>
                <div className="depositItem">
                    <label>Amount Deposit</label>
                    <input type="number" placeholder="Amount" />
                </div>
                <div className="depositItem">
                    <label>Description</label>
                    <textarea name="description" className='textAreaD' id="" cols="30" rows="10" placeholder='Description'></textarea>
                </div> 
                

            </form>
            <button className="depositButton">Reset</button>
            <button className="depositButton">Submit</button>
        </div>
        </div>
        </>
        
    );
}
