import "./customStat.css";

export default function CustomStat() {
    return (
        <div className="customStat">
            <h1 className="customStatTitle">Customized Statement</h1>
            <form className="customStatForm">
                <div className="customStatItem">
                    <label>Account no</label>
                    <input type="number" placeholder="Account no" />
                </div>
                <div className="customStatItem">
                    <label>From Date</label>
                    <input type="date" placeholder="From" />
                </div>
                <div className="customStatItem">
                    <label>To Date</label>
                    <input type="date" placeholder="To" />
                </div>


            </form>
            <button className="customStatButton">Reset</button>
            <button className="customStatButton">Submit</button>
        </div>
    );
}
