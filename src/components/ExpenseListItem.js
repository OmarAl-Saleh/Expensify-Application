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
    <Link className="list-item" to={`edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">
          {moment(createdAt).format("MMMM Do, YYYY")}
        </span>
      </div>
      <h3 className="list-item__data">{numeral(amount / 100).format("$0,0.00")}</h3>
    </Link>
  );
};

// export default ExpenseListItem;
//L.103 : we make a connect to have access to dispatch method
// export default connect()(ExpenseListItem);
export default connect()(withRouter(ExpenseListItem));
