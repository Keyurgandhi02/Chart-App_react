import Card from "../UI/Card";
import Expense from "./ExpenseItem";
import "./ExpensesAll.css";
import React, { useState } from "react";
import ExpenseFilter from "./FilterExepnse";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function ExpensesAll(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card
        className="expensesAll {
      "
      >
        <ExpenseFilter
          selected={filteredYear}
          onFilter={filterHandler}
        ></ExpenseFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </li>
  );
}

export default ExpensesAll;
