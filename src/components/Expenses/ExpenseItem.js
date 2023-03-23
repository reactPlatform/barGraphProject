import React,{ useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const changeTitle = () => {
        setTitle('Updated Title');
    }
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={props.amount} location={props.location}/>
            <button onClick={changeTitle} className='button'>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;