import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

//L.102
const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile"> Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {props.expenses.length === 0 && (
          <div className="list-item list-item--message">
            {" "}
            <span>No expenses</span>
          </div>
        )}
        {props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })}
      </div>
    </div>
  );
};

//L.101
// we use the connect method to connect our component with the redux store
const mapStateProps = (state) => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
  };
};
const ConnectedExpenseList = connect(mapStateProps)(ExpenseList);

export default ConnectedExpenseList;

//L.101
// we use the connect method to connect our component with the redux store
// const mapStateProps = (state) => {
//   return {
//     expenses: state.expenses,
//     filters: state.filters,
//   };
// };
