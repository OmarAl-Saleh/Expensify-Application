import React from "react";

//L.81: props is used to get the id from the url
const EditExpensePage = (props) => {
  console.log(props);
  return <div>Editing the expense with id of {props.match.params.id}</div>;
};

export default EditExpensePage;
