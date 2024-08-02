import Summary from './ExpenseSummary.jsx';
import Expenses from './Expenses.jsx';

export default function Main(){
    return(
        <main className="main-container">
            <Summary />
            <Expenses />
        </main>
    )
}