//L.105 : we use it as a template or function to reused it in many components such as addExpense , editExpense ..

import React from "react";
import moment from "moment";
// these two imports together the picker and its css file
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

//L.106 we want to handle date picker you can visit moment docs on bookmarks
// const know = moment();
// console.log(know.format("MMM DD, YYYY"));

export default class ExpenseForm extends React.Component {
  // we need to use a local state so we use a class
  constructor(props) {
    //L.108 we use it to render the value of expense we want to edit or show the default value if we want to create expense
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      // we use moment to handle the date
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      calendarFocused: false,
      error: "",
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    // regular expression to match the amount we want a number with two decimal point (optional)
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (date) => {
    if (date) {
      this.setState(() => ({ createdAt: date }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    //L.107
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide description and amount.",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        // we call it from addExpensePage
        // The description of the expense
        description: this.state.description,
        // The amount of the expense, converted to cents by multiplying by 100
        amount: parseFloat(this.state.amount, 10) * 100,
        // amount: parseFloat(this.state.amount, 10), we can use it to render as the user input
        // The creation date of the expense, converted to a timestamp
        createdAt: this.state.createdAt.valueOf(),
        // An optional note associated with the expense
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}></input>
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}></input>
        <br></br>
        <SingleDatePicker
          // The initial date to be displayed, set to the current date
          date={this.state.createdAt}
          // Callback function to be executed when the user selects a new date
          onDateChange={this.onDateChange}
          // Whether the date picker is currently focused
          focused={this.state.calendarFocused}
          // Callback function to be executed when the focus state of the date picker changes
          onFocusChange={this.onFocusChange}
          // The number of months to be displayed in the date picker
          numberOfMonths={1}
          // A function to determine if a date is outside the allowed range
          // In this case, all dates are allowed even past dates
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          className="textarea"
          onChange={this.onNoteChange}></textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
