import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
//L.107
const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/"); // it like a redirect to home page after you submit the value
      }}
    />
  </div>
);
export default connect()(AddExpensePage);
