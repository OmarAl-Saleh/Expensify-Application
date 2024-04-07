// we have to import global classes from React
// 1 React : is the object that has the method to create components
// 2 ReactDOM : is the object that has the method to render the components in our HTML file.

//L.55
// in this lecture we split every component to a separate file to make the code more readable and easy to understand

//L.55
import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";

//L.66: its a good practice to import the normalize.css file to make the default styles the same in all browsers and to make the styles more consistent we install it from yarn
// we have to update the webpack.config.js file to use the normalize.css file so have to add ? to the regular expression so he can trace the css file
import "normalize.css/normalize.css";

//L.64 : here we import the css file so webpack can trace it and use it in the bundle file

import "./Styles/styles.scss";

// we use the ReactDOM.render method to render the parent class in the HTML file
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
