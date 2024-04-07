import React from "react";

// we use Option features in this file so we must import it
import Option from "./Option";

//*L40 : we can use the stateless functional component to make the code more readable and easy to understand
//* if you have only render method and no state or lifecycle methods the better is use the stateless functional component
//* we must call it and name (capital) and pass props to it like the class component but without the render method and the class keyword
// we can use it when we don't need to use the state or the lifecycle methods otherwise we have to use the class component
// you can see the previous version of the Action Header and Option in below in notes

//L.62: here we can remove return and use the implicit return because we have only one expression
const Options = (props) => {
  return (
    //L.30
    // bind you can get a documentation from bookmarks
    // we use it to pass the value of this like props.options to get access in handleRemoveAll method
    // it not recommended to use it in the render method because it will create a new function every time the render method is called
    // we can use it in the constructor method to bind the function to the class
    //but i let it here to show you how to use it but you can remove it and use the constructor method
    <div>
      {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
      <div className="widget-header">
        <h3 className="widget-header__title"> Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
      {/* L.36 here we call the parent Delete Options function using inheritance , so no need for bind*/}
      {
        //L.28
        // we render the options don't forget to set a key for each item in the array
        //L.70 : we will use the index parameter that map provide to us to set the key for each item in the array
        props.options.map((option, index) => {
          // return <p key={option}>{option}</p>;
          // we want to access this items to option class so we will use the option class to render the content of this class
          return (
            <Option
              key={option}
              optionText={option}
              count={index + 1}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })
      }
    </div>
  );
};

export default Options;
