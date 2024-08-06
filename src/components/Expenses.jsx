import Button from './Button.jsx';
import '../Styles/expenses.css';
import React from 'react';
import Modal from './Modal/Modal.jsx';
import DisplayData from './DisplayData.jsx';

export default function Expenses() {
    const [modal, setModal] = React.useState(false);
    const [data, setData] = React.useState(null);

    const toggleModal = (data) => {
        setModal(!modal);
    }
    const handleData = (newData) => {
        setData(newData);
    }
    
    return (
        <div className="expenses-container">
            {modal && (
                <Modal onClick = {(newData) => {
                    handleData(newData);
                    toggleModal();
                }}
                />
            )}
            <div className="display-exp-container">
                <div className="exp-title-container">
                    <h1 className="exp-title">Recent Expenses</h1>
                </div>
                <div className="expenses">
                    {data && <DisplayData data={data}/>}
                </div>
            </div>
            <div className="btn-container">
                <Button onClick={toggleModal}/>
            </div>
        </div>
    );
}
