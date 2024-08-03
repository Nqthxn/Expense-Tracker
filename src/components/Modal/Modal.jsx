import './modal.css';

export default function Modal({onClick}){
    const handleClick = (e) => {
        e.stopPropagation();
    }

    return(
        <div className="modal-overlay" onClick={onClick}>
            <div className="modal-content" onClick={handleClick}>
                <div className="close-btn-container">
                    <button onClick={onClick} className="close-btn">❌</button>
                </div>
                <div className="modal-input-container">
                    <div className="expense-type-container">
                        <label for="type">Type</label>
                        <select className="input input-type" name="expense-type">
                            <option value="food">🍔 Food</option> 
                            <option value="rent">🏠 Rent</option> 
                            <option value="transport">🚌 Transport</option>
                            <option value="entertainment">🍿 Entertainment</option>  
                            <option value="miscellaneous">🎲 Miscellaneous</option>
                        </select>
                    </div>
                    <div className="expense-description-container">
                        <label for="type">Description</label>
                        <input type="text" className="input description-input" />
                    </div>
                    <div className="expense-amount-container">
                        <label for="type">Amount</label>
                        <input type="text" className="input" />
                    </div>
                </div>
                <div className="complete-btn-container">
                    <button className="complete-btn">Complete</button>
                </div>
            </div>
        </div>
    )
}