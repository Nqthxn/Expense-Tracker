import '../Styles/summary.css';

export default function ExpenseSummary(){
    return(
        <div className="summary-container">
            <div className="expense-summary balance">
                <h3 className="bal-name">Total Balance</h3>
                <h3 className="bal-amount">€1000.<span className="cents">00</span></h3>
            </div>
            <div className="expense-summary total-exp">
                <h3 className="exp-name">Total Expense</h3>
                <h3 className="exp-amount">€1000.<span className="cents">00</span></h3>
            </div>
            <div className="expense-summary top-exp">
            <h3 className="exp-name">Top Expenses</h3>
            </div>
        </div>
    );
}