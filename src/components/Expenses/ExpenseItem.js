import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </Card>
    );
}
export default ExpenseItem;