import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");

  const yearChangeHandler = (newEnteredYear) => {
    setEnteredYear(newEnteredYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onYearChange={yearChangeHandler} />
      <ExpensesChart  expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
