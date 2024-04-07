import React from "react";
//L.62 : here we can remove return and use the implicit return because we have only one expression
const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}.{props.optionText}
      </p>

      {/*L.43 we will use the handleDeleteOption method to delete the option from the array but we must use the arrow function because we want access to options text as parameter so the only way is use arrow function we can't do it immediately  */}
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}>
        remove
      </button>
    </div>
  );
};

export default Option;

// we can use it but it is not recommended because it hard to distinguish between the class and the function without a name  for debugging
// export default (props) => {
//   return (
//     <div>
//       Option:{props.optionText}
//       {/*L.43 we will use the handleDeleteOption method to delete the option from the array but we must use the arrow function because we want access to options text as parameter so the only way is use arrow function we can't do it immediately  */}
//       <button
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText);
//         }}>
//         remove
//       </button>
//     </div>
//   );
// };
