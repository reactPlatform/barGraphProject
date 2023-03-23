import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    const deleteExp = (event) => {
        event.target.parentElement.remove();
    }
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button onClick={deleteExp} className='button'>Delete Expense</button>
        </Card>
    );
}
export default ExpenseItem;