
import './App.css';
import Card from './components/UI/Card';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expenses = [
    {
      date: new Date(2022,3,20),
      title: 'Horlicks',
      amount: 110,
      location: 'Chennai',
    },
    {
      date: new Date(2022,5,17),
      title: 'Boost',
      amount: 150,
      location: 'Thenkasi',
    },
    {
      date: new Date(2022,6,10),
      title: 'Bournvita',
      amount: 200,
      location: 'Porayar',
    },
  ]
  return (
    <Card className='expenses'>
      <NewExpense />
      {expenses.map((expense) => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} location={expense.location}></ExpenseItem>)}
      
    </Card>
  );
}

export default App;
