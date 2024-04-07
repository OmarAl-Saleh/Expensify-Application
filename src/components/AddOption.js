//L.55
// we must import it in all sub files
import React from "react";

// we use the default to call it by any name we want in the app.js file
export default class AddOption extends React.Component {
  //L.58

  state = {
    error: undefined,
  };
  // constructor(props) { L.58 using plugins we define the state in the class and bind the method to the class using arrow function so we don't need to use the constructor anymore
  //   // we make it because we want to use this in the handleAddOption method
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   //L.37 here we define a local state for the class to error detection
  //   // this.state = {
  //   //   error: undefined,
  //   //};
  // }
  handleAddOption = (e) => {
    e.preventDefault();
    // we will use it to handle the form submission
    let option = e.target.elements.option.value.trim(); // to get the value of the input field with name="option"
    //L.37
    const error = this.props.handleAddOption(option); // to push the value of the input field to the options array and return a string if there is an error
    e.target.elements.option.value = ""; // to clear the input field after submitting the form
    this.setState(() => ({ error })); //with destructuring
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input
            className="add-option__input"
            type="text"
            name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
