import Button from './Button.jsx';
import '../Styles/expenses.css';
import React from 'react';
import Modal from './Modal/Modal.jsx';
import DisplayData from './DisplayData.jsx';

export default function Expenses() {
    const [modal, setModal] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [expenses, setExpenses] = React.useState([]);

    const toggleModal = (data) => {
        setModal(!modal);
    }

    const addExpense = (newExpense) => {
        setExpenses(prevExpense => [...prevExpense, newExpense]);
        setModal(false);
    }
    return (
        <div className="expenses-container">
            {modal && (
                <Modal 
                    onClick = {addExpense}
                />
            )}
            <div className="display-exp-container">
                <div className="exp-title-container">
                    <h1 className="exp-title">Recent Expenses</h1>
                </div>
                <div className="expenses">
                    {expenses.length > 0  ? (<DisplayData data={expenses}/>) : (<p className="no-expenses">No Expenses Recorded</p>)}
                </div>
            </div>
            <div className="btn-container">
                <Button onClick={toggleModal}/>
            </div>
        </div>
    );
}
