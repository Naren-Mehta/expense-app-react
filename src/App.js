import "./App.css";

import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance1",
      amount: 298.77,
      date: new Date(2022, 2, 20),
    },
    {
      title: "Bike Insurance",
      amount: 198.88,
      date: new Date(2022, 2, 20),
    },
    {
      title: "Health Insurance",
      amount: 698.11,
      date: new Date(2022, 2, 20),
    },
    {
      title: "Life Insurance",
      amount: 900.22,
      date: new Date(2022, 2, 20),
    },
    {
      title: "Home Insurance",
      amount: 377.84,
      date: new Date(2022, 2, 20),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
