import React from 'react';
import '../Styles/data.css';

export default function DisplayData({ data }) {
    return (
        <div className="data-container">
            <div className="expense-header">
                <h3>Type</h3>
                <h3>Description</h3>
                <h3>Amount</h3>
            </div>
            <div className="expense-info">
                {data.map((expense, index) => (
                    <div className="expenses" key={index}>
                        <p>{expense.type}</p>
                        <p className="description">{expense.description}</p>
                        <p>&#8364;{expense.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
