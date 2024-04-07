//* there are a initial version of code in playground it coded without using React components */

//L.55
import React from "react";

import AddOption from "./AddOption.js";
import Action from "./Action.js";
import Header from "./Header.js";
import Options from "./Options.js";

import OptionModal from "./OptionModal.js";

//import Option from "./components/Option.js"; we need it only inside Options file

// Note : in React component we must use the capital letter for the first letter of the class name
// it used to difference between normal HTML tags and React components

// this is the object that we will render
export default class IndecisionApp extends React.Component {
  // this is the parent class that we render it in the ReactDOM.render method
  //* L.36 to learn react component with state component go to playground counter */

  //L.58 we will use a new way to define the attribute using babel class transform plugin to define the state of the class we download this feature from babel website using npm
  //L.61 we use Selected Option to show or hide the modal depends on the value of the selected option
  state = {
    options: [],
    selectedOption: undefined,
  };

  // constructor(props) { L.58 using plugins we define the state in the class and bind the method to the class using arrow function so we don't need to use the constructor anymore
  //   super(props);
  //   //L.30
  //   // we use it to bind every info we want to use in the class, so that they are available for all methods inside the class, except render it will pass to it by even if don't define it
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   // bind only when the class made not by every render
  //   //L.36
  //   // this.state = {
  //   //   // must be an object
  //   //   options: [], //L.41 : here we use the default value of the options array
  //   // };
  // }

  // L.36 to manipulate the state of the class we use the setState method to update the state of the class in child class
  // props are read-only and can't be changed from the child class on-way data flow
  // the trick is when we want to delete options from child class we will call this function because you can't update the state of the class from the child class
  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });

    //L.43 we will use another syntax to update the state of the class using the arrow function
    // when we want to return an object we must use the () to wrap the object
    this.setState(() => ({ options: [] }));
    // here we short and simplify the code
  };

  handleCloseModal = () => {
    //L.61 to close the modal we just set the selectedOption back to undefined
    this.setState(() => {
      return { selectedOption: undefined };
    });
  };

  //L.43
  handleDeleteOption = (option) => {
    // we will use it to delete a single option from the array
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => {
        // return True to keep the item in the array and False to remove it
        return opt !== option;
      }),
    })); // you can search about filter function in MDN
  };

  // L.36
  handlePick = () => {
    // we do not use setState of this keyword because we don't want to update the state of the class but we want to get a random item from array
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    //alert(option);
    //L.61 : we will use it to show the modal with the selected option
    this.setState(() => {
      return { selectedOption: option };
    }); // when the value of the selected option is changed from undefined the modal will be shown
  };
  // L.37
  // it will receive the option from the child class and push it to the options array
  handleAddOption = (option) => {
    // some validation
    if (!option)
      // check if the option is empty or null
      return "Enter valid value to add item"; // it will return the value to the child class
    else if (this.state.options.indexOf(option) > -1)
      // check if the option is already exist in the array
      return "This option already exists!";
    // we use the setState method to update the state of the class
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
        // we use concat method to add the new option to the array without changing the original array you can search on it from MDN concat in bookmark
        // option can  be an array  the difference will will pass the parameter like this concat ([option])
      };
    });
    // we can use another syntax
    //this.setState((p) => ({ options: p.options.concat(option) }));
  };

  //L.44 Life cycle methods
  // it will be called when the component is mounted on the DOM (when the page load).
  // it like middleware functions but it will work only once after the event we will determine it
  // you can use them only with classes not with stateless functional components

  componentDidMount() {
    // the function will work after the component is mounted on the DOM after loading the page.
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json); // to convert the string to an array
      //console.log("Fetching Data");
      if (options) {
        this.setState(() => ({ options })); // to fetch the data from local storage and update the state of the class
      }
    } catch (e) {
      // check if the data is not valid then just continue without doing anything
      // Do nothing at all
    }
    // result: we can see the items even if we refresh the page
  }

  componentDidUpdate(prevProps, prevState) {
    // it will work after the component is updated after changing the state or props
    // it will receive the previous props and the previous state as parameters you can rename it as you want but the order must be the same
    //L.45
    if (prevState.options.length !== this.state.options.length) {
      // to check if the options array is changed
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json); // this is a way to save the data in the local storage as a string we will use database later
      console.log("Saving Data");
    }
  }

  componentWillUnmount() {
    // it will work after the component is removed from the DOM
    // we will use it when we have multiple pages and we want to remove the component from the DOM when we move to another page
    console.log("componentDidUnmount");
  }

  render() {
    // we use these variables as props(parameter) to pass data to the child class (component)
    //let title = "Indecision App"; we will use the default value instead of it L.41
    let subtitle = "Put your life in the hands of a computer";
    //let options = ["Thing one", "Thing two", "Thing four"];
    return (
      // here we use the JSX to pass a parameters to child components like title and subtitle
      <div>
        <Header subtitle={subtitle} />
        {/* here we can use our class(React component ) */}
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        {/* we can use this syntax <addOption> </addOption> but it is not recommended we will use it to pass children Props */}
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
//L.41 : here we define a default value for options array
// so we can pass a parameter in react dom render method if not the default(empty) value will be used
// IndecisionApp.defaultProps = {
//   options: [],
// };

//* previous version of the code

//L.41 : here we can pass a parameter to the parent class to use it in the class this values will override the default value of the options array
// ReactDOM.render(<IndecisionApp options={['first','second']} />, document.getElementById("app"));

// class Header extends React.Component {
//   render() {
//console.log(this.props); // we can use this.props to access the properties of the parent class
// it don't understand this search on react props its a special property that we can use to pass data to the component we can name the variable what ever we want
// we use it to render and he is necessary to use it in every using of React Component parent class
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// we convert it to stateless functional component
// class Action extends React.Component {
// event handler method
// handlePick() {
//   alert("handlePick");
// }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}>
//           What Should I do?{" "}
//         </button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   render() {
//     return (
//L.30
// bind you can get a documentation from bookmarks
// we use it to pass the value of this like props.options to get access in handleRemoveAll method
// it not recommended to use it in the render method because it will create a new function every time the render method is called
// we can use it in the constructor method to bind the function to the class
//but i let it here to show you how to use it but you can remove it and use the constructor method
//       <div>
//         {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {/* L.36 here we call the parent Delete Options function using inheritance , so no need for bind*/}
//         {
//L.28
// we render the options don't forget to set a key for each item in the array
//           this.props.options.map((option) => {
// return <p key={option}>{option}</p>;
// we want to access this items to option class so we will use the option class to render the content of this class
//             return <Option key={option} optionText={option} />;
//           })
//         }
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
// we will use it to render inside options class so whenever option class used it will render the content of this class
//   render() {
//     return <div>Option:{this.props.optionText}</div>;
//   }
// }
