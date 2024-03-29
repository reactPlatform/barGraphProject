import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle,setTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredDate,setDate] = useState('');
    const [enteredLocation,setLocation] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value

        // })

        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle:event.target.value}
        // })

    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const locationChangeHandler = (event) =>{
        setLocation(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expensedata = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
            location: enteredLocation
        };
        props.onSaveExpenseData(expensedata);
        setTitle('');
        setAmount('');
        setDate('');
        setLocation('');
    };
    const [showForm,setShowForm] = useState(false);
    const showFormContent = () => {
        setShowForm(true);
        
    }
    const hideFormContent = () => {
        setShowForm(false);
    }
    
    let formContent = (<button className='new-expense__actions' onClick={showFormContent}>Add New Expense</button>)
    if(showForm){
        formContent = (
            <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} value={enteredDate}/>
                </div>
                <div className='new-expense__control'>
                    <label>Location</label>
                    <input type='text' onChange={locationChangeHandler} value={enteredLocation}/>
                </div>
                <div className='new-expense__actions'>
                    <button onClick={hideFormContent}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
                
            </div>
        </form>
        )
    }
    return(
        <div>
        {formContent}    
        
        </div>
    )
};
export default ExpenseForm;