// this is our old app.js file without any react component so we rebuilt it using react component and JSX syntax to be more readable and easy to write and understand

//import { jsx as _jsx } from "react/jsx-runtime";
console.log("Does it change");
// The first thing to notice is that we are using JSX in the app.js file. This is possible because we have Babel set up to convert JSX into React.createElement calls. We can remove the parentheses from the React.createElement calls and replace them with JSX. This makes the code much easier to read and write.
// we can use JSX in this file because we have Babel we can remove the parenthesizes

//general note : when we call a function in JSX we don't use the parentheses we just use the name of the function if the function is void otherwise we use the parentheses

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  //L18
  e.preventDefault(); // to prevent the full page refresh that happens by default when you submit a form

  const option = e.target.elements.option.value; // to get the value of the input field with name="option"

  if (option) {
    app.options.push(option); // to push the value of the input field to the options array
    e.target.elements.option.value = ""; // to clear the input field after submitting the form
    RenderOnSubmit(); // to render the new options array
  }
};

const onRemoveAll = () => {
  app.options = [];
  RenderOnSubmit();
};

const onMakeDecision = () => {
  //L.20
  // the target is to pick an option randomly and alert it to the user
  // math.random() returns a random number between 0 and 1 such as 0.3333333 and maximum number is 0.9999999
  // we multiply it with the length of array so if we have w elements in the array the maximum number will be w-1 and the minimum number will be 0
  const randomNum = Math.floor(Math.random() * app.options.length);
  //console.log(randomNum);
  const option = app.options[randomNum];
  alert(option);
};
// you can know everything about React Event from bookmarks

const appRoot = document.getElementById("app");
const RenderOnSubmit = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {/* we want to map over the  options array and return an li for each item we will using dynamic way  of doing this using JSX Techniques */}
        {/* IN JSX we must use a key(unique) with each entry of array you want to render dynamically */}
        {app.options.map((option) => {
          return <li key={option}> {option} </li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

RenderOnSubmit();

//ReactDOM.render(template3, appRoot);
// ReactDOM.render(template, document.getElementById("app"));
// ReactDOM.render(template_Two,document.getElementById("app"));

// const template = (
//   <div>
//     <h1>This is JSX from app.js</h1>
//     <p>This is some info</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );

// const userName = "Omar Al-Saleh";
// // we can use variables in JSX by using curly braces and you can use any valid JavaScript expression inside of them like the toUpperCase method if statement objects etc..
// const userAge = 21;
// const userLocation = "Amman";

// challenge L.11

// we can use object
// const user = {
//   name: "Omar Al-Saleh",
//   age: 21,
//   location: "Amman",
// };
// we can use ordinary functions or arrow functions
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined; // mean nothing you can remove it nothing will return
//   }
// }
// const template_Two = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {/* if the condition is exist and true the second part will be rendered */}
//     {/* otherwise not */}
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}{" "}
//     {/* <p>Location: {getLocation(user.location)}</p> */}
//     {getLocation(user.location)}
//   </div>
// );
