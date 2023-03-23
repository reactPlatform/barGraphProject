import React,{ useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const [amount, setAmount] = useState(props.amount);
    const changeExpense = () => {
        setAmount('100$');
    }
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={amount} location={props.location}/>
            <button onClick={changeExpense} className='button'>Change Expense</button>
        </Card>
    );
}
export default ExpenseItem;