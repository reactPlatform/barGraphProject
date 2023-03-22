
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
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
    <div>
      <h2>Let's get started</h2>
      {expenses.map((expense) => <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} location={expense.location}></ExpenseItem>)}
    </div>
  );
}

export default App;
