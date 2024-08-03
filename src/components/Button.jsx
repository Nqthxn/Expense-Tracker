import btnIcon from '../Icons/button-icon.png';
import '../Styles/button.css';

export default function Button({onClick}) {
    return (
        <div className="button-container">
            <button className="button2" onClick={onClick}>
                <img src={btnIcon} className="button-img" alt="Button Icon" />
                <span className="btn-name">+ New Expense</span>
            </button>
        </div>
    );
}
