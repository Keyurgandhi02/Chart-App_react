import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Expensesitems from "./components/Expenses/ExpensesAll.js";
const Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 100.4,
    date: new Date(2021, 2, 14),
  },
  {
    id: "e2",
    title: "Car INsurance",
    amount: 500.5,
    date: new Date(2021, 2, 14),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expensesitems items={expenses}></Expensesitems>
    </div>
  );
}

export default App;
