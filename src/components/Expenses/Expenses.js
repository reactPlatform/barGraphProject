import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No expenses found!</p>;
  let oneExpenseContent = '';
  
  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
    <ExpenseItem 
    key={expense.id} 
    date={expense.date} 
    title={expense.title} 
    amount={expense.amount} 
    location={expense.location}>
      
    </ExpenseItem>));
    if(filteredExpenses.length === 1){
      oneExpenseContent = (<h3 className='oneExpense'>Only single Expense here. Please add more...</h3>)
      
    }
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseContent}
        {oneExpenseContent}
      </Card>
    </div>
  );
};

export default Expenses;