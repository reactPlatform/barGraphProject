import React,{ useState } from 'react';
import './App.css';
import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expenses = [
    {
      id:1,
      date: new Date(2022,3,20),
      title: 'Horlicks',
      amount: 110,
      location: 'Chennai',
    },
    {
      id:2,
      date: new Date(2022,5,17),
      title: 'Boost',
      amount: 150,
      location: 'Thenkasi',
    },
    {
      id:3,
      date: new Date(2022,6,10),
      title: 'Bournvita',
      amount: 200,
      location: 'Porayar',
    },
  ]
  const [expenseList,updateExpenseList] = useState(expenses); 
  const addExpenseHandler = expense => {
    
    updateExpenseList(() => {
      return [expense,...expenseList]});
    
    
  };
  return (
    <Card className='expenses'>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenseList}/>     
    </Card>
  );
}

export default App;
