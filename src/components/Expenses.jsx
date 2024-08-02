import Button from './Button.jsx';
import '../Styles/expenses.css';

export default function Expenses() {
    return (
        <div className="expenses-container">
            <div className="display-exp-container">
                <div className="exp-title-container">
                    <h1 className="exp-title">Recent Expenses</h1>
                </div>
            </div>
            <div className="btn-container">
                <Button />
            </div>
        </div>
    );
}
