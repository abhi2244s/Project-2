import logo from './logo.svg';
import './App.css';
import Expense from './component/ExpenseTracker';

function App() {

  let expense = [
    {
      id : 'e1',
      title : "School Fees",
      price : 700,
      date : new Date(2022,10,20)
    },
    {
      id : 'e2',
      title : "Tuition Fees",
      price : 500,
      date : new Date(2022,10,20)
    },
    {
      id : 'e3',
      title : "College Fees",
      price : 300,
      date : new Date(2022,10,20)
    },
    {
      id : 'e4',
      title : "Bus  Fees",
      price : 400,
      date : new Date(2022,10,20)
    }
  ]
  return (
    <>
     <h1>Let's Learn React</h1>
    <Expense  
    date = {expense[0].date}
    title = {expense[0].title}
    price = {expense[0].price}
     
    ></Expense>
    <Expense  
    date = {expense[1].date}
    title = {expense[1].title}
    price = {expense[1].price}
     
    ></Expense>
     <Expense  
    date = {expense[2].date}
    title = {expense[2].title}
    price = {expense[2].price}
     
    ></Expense>
     <Expense  
    date = {expense[3].date}
    title = {expense[3].title}
    price = {expense[3].price}
     
    ></Expense>
    </>
    
 
  );
}

export default App;
