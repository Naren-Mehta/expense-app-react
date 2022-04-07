import "./Expenses.css";
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
function Expenses(props) {
  const expenses = props.items;
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => {
        return (
          <ExpenseItems
            key={"expense_id_" + index}
            date={expense.date}
            type={expense.title}
            cost={expense.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
