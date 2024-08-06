import './modal.css';
import React from 'react';

export default function Modal({onClick}){
    const handleClick = (e) => {
        e.stopPropagation();
    }
    const [type, setType] = React.useState('🍔 Food');
    const [description, setDescription] = React.useState('');
    const [amount, setAmount] = React.useState('');

    const handleType = (e) => {
        setType(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleAmount = (e) => {
        setAmount(e.target.value);
    }
    const handleComplete = () => {
        const expenseData = {type, description, amount};
        onClick(expenseData);

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
                        <select 
                            className="input input-type" 
                            name="expense-type"
                            onChange={handleType}
                        >
                            <option value="🍔 Food">🍔 Food</option> 
                            <option value="🏠 Rent">🏠 Rent</option> 
                            <option value="🚌 Transport">🚌 Transport</option>
                            <option value="🍿 Entertainment">🍿 Entertainment</option>  
                            <option value="🎲 Miscellaneous">🎲 Miscellaneous</option>
                        </select>
                    </div>
                    <div className="expense-description-container">
                        <label for="type">Description</label>
                        <input 
                            type="text" 
                            className="input description-input" 
                            onChange={handleDescription}
                        />
                    </div>
                    <div className="expense-amount-container">
                        <label for="type">Amount</label>
                        <input 
                            type="text" 
                            className="input" 
                            onChange={handleAmount}
                        />
                    </div>
                </div>
                <div className="complete-btn-container">
                    <button 
                        className="complete-btn" 
                        onClick={handleComplete}
                    >
                    Complete
                    </button>
                </div>
            </div>
        </div>
    );
}