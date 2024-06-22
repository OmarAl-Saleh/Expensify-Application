import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

//L.102
const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.length === 0 && <h3>No Expenses</h3>}
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
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
