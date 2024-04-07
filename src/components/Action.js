import React from "react";
// L.62: here we used the implicit return because we have only one expression you can see the old way on header and Options components
const Action = (props) => (
  // we can use the props directly without using this keyword because there are no methods or state here

  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}>
      What Should I do?
    </button>
  </div>
);

export default Action;
