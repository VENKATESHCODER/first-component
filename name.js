import './ExpenseItem.css';
import React,{ useState } from 'react';


const Expense = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
    const clickHandler = () =>{
        setTitle('Updated!');
        setAmount('100');
        console.log(amount);
        console.log(title);
    }
    const [amount, setAmount] = useState(props.amount);
    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
            
        </div>
    );
}

export default Expense;

import React from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';


const NewExpense = () => {
     return <div className="new-expense">
        <ExpenseForm />
     </div>
}

export default NewExpense;

import React from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
       return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Expense Title</label>
                <input type="text" />
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Expense Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
       </form>
}
export default ExpenseForm;
