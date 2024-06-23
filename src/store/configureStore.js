// Store creation

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
//L.152
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};

//L.109 : we paste the link to redux dev tool from github repo in bookmark
//* this is one line for all your redux application :  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//* you get it from this link :
// https://github.com/zalmoxisus/redux-devtools-extension


