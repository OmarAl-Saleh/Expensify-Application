//L.139 : our goal to return the sum of all expenses amount so we used a array method called reduce
export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0);
};
