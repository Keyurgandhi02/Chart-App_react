import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
          placeholder="Give Title"
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
           placeholder="Give Amount"
            onChange={amountChangedHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangedHandler}
            type="Date"
            value={enteredDate}
            min="2021-01-01"
            max="2021-12-31"
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
