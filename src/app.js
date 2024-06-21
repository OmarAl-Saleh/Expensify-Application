import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./Styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

//L.101 to provide the store to all our components
import { Provider } from "react-redux";
//L.99 we organize the redux and connected it with our components

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "gas bill", amount: 2000 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 10800, createdAt: 1000 })
);

const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

//L.101 we use provider as HOC and the props is the redux store
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// we use the ReactDOM.render method to render the parent class in the HTML file
//L.80: organize the routers in separate files
ReactDOM.render(jsx, document.getElementById("app"));
