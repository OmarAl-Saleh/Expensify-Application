import React from "react";
//L.101
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
