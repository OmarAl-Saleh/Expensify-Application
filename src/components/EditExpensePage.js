import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";

class EditExpensePage extends React.Component {
  state = {
    firstAccess: true,
  };
  // to fix the problem with refresh the page
  componentDidMount() {
    // Set firstAccess to false after the component mounts
    this.setState({ firstAccess: false });
  }

  componentDidUpdate(prevProps) {
    // Check if props.expense becomes null after the first access
    if (!this.props.expense && !this.state.firstAccess) {
      this.props.history.push("/dashboard");
      alert("Please refresh the page to restore the Styling version");
    }
  }

  render() {
    // If props.expense is null (on first load), return null or loading indicator
    if (!this.props.expense) {
      return null; // or render a loading indicator
    }

    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title"> Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={(expense) => {
              this.props.dispatch(
                startEditExpense(this.props.expense.id, expense)
              );
              this.props.history.push("/");
            }}
          />
          <button
            className="button button--secondary"
            onClick={() => {
              this.props.dispatch(
                startRemoveExpense({ id: this.props.expense.id })
              );
              this.props.history.push("/");
            }}>
            Remove Expense
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps)(EditExpensePage);
