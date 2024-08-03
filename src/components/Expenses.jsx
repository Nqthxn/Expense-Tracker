import Button from './Button.jsx';
import '../Styles/expenses.css';
import React from 'react';
import Modal from './Modal/Modal.jsx';

export default function Expenses() {
    const [modal, setModal] = React.useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }
    
    return (
        <div className="expenses-container">
            {modal && (
                <Modal onClick={toggleModal}/>
            )}
            <div className="display-exp-container">
                <div className="exp-title-container">
                    <h1 className="exp-title">Recent Expenses</h1>
                </div>
            </div>
            <div className="btn-container">
                <Button onClick={toggleModal}/>
            </div>
        </div>
    );
}
