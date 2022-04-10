import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear().toString() === filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          date={expense.date}
          title={expense.title}
          cost={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
