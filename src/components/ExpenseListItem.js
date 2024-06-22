import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";
//L.102
const ExpenseListItem = ({
  history,
  dispatch,
  id,
  description,
  amount,
  createdAt,
}) => {
  return (
    <div>
      <Link to={`edit/${id}`}>
        <h3>{description}</h3>
      </Link>

      <p>
        {numeral(amount / 100).format("$0,0.00")} -{" "}
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
      {/* <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}>
        Remove
      </button> */}
      {/* <button we can use it instead of using link
        onClick={() => {
          history.push(`edit/${id}`);
        }}>
        Edit
      </button> */}
    </div>
  );
};

// export default ExpenseListItem;
//L.103 : we make a connect to have access to dispatch method
// export default connect()(ExpenseListItem);
export default connect()(withRouter(ExpenseListItem));
