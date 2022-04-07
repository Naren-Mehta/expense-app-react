import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.type}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
