import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./Styles/styles.scss";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

//L.101 to provide the store to all our components
import { Provider } from "react-redux";
//L.99 we organize the redux and connected it with our components

const store = configureStore();

//L.164
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};
//L.101 we use provider as HOC and the props is the redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// we use the ReactDOM.render method to render the parent class in the HTML file
//L.80: organize the routers in separate files
ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));
//L.158 : to fetch all the expenses from the database and pass them to the redux when we first request the program

//L.164,165 the function is run when we change from authenticated to not authenticated and vice versa
// if we have a user then it will be log in else the user is not exist so log out
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // log in logic
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {});
    renderApp();
    if (history.location.pathname === "/") {
      // so want to redirect if it's only in login page
      history.push("/dashboard");
    }
  } else {
    // log out logic
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
