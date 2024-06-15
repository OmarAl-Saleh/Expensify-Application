import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
//L.81: props is used to get the id from the url
const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          //console.log("updated", expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}>
        Remove
      </button>
    </div>
  );
};
//L.108
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      // using array search method to find the expense with id
      return expense.id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(EditExpensePage);
