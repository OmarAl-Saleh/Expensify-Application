import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./Styles/styles.scss";
import AppRouter from "./routers/AppRouter";


// we use the ReactDOM.render method to render the parent class in the HTML file
//L.80: organize the routers in separate files
ReactDOM.render(<AppRouter/>, document.getElementById("app"));
