import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expensesArr = [
  {
    id: "e1",
    title: "Car Insurance1",
    amount: 298.77,
    date: new Date(2022, 4, 13),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 198.88,
    date: new Date(2022, 5, 14),
  },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 698.11,
    date: new Date(2022, 6, 4),
  },
  {
    id: "e4",
    title: "Life Insurance",
    amount: 900.22,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e5",
    title: "Home Insurance",
    amount: 377.84,
    date: new Date(2022, 8, 2),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesArr);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
