//******L.32,33 Component State L.41 count default value */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // we give the initialization and give a  default value of the state inside the constructor method
    //* you must define it like that use this.state with object attribute values
    this.state = { count: props.count }; //L.41 default value of the count
  }

  //L.46

  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"));
    if (!isNaN(count)) {
      // if the value is not a number it will not update the state
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAddOne() {
    //* this.setState(()=>{}) this method what ever we return from it will re-render it so we update the page without use re-render function as we did in the previous version
    this.setState((prevState) => {
      // the parameter is the info of the previous state so we can use it to update the state
      return {
        // here we are already inside State object so we don't need to use this.state.count we can use count directly
        // here you can edit the state that you want to change and the other state will not be affected
        count: prevState.count + 1,
        //* shortly: we update the state object that any time we update it will re-render the page
      };
    });
  }
  handleMinusOne() {
    this.setState((P) => {
      return {
        count: P.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
//L.41 default value of the count
Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter />, document.getElementById("app"));

//*******************previous version without using component State */
// // This implementation of manipulates DOM elements like Buttons with counters

// let count = 0;
// const someId = "myId";
// const addOne = () => {
//   count++;
//   console.log("addOne", count);
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   console.log("minusOne");
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log("reset");
//   renderCounterApp();
// };
// // in JSX syntax we can't use class= "button" we should use className="button " instead because class is a reserved word in JavaScript
// // you can search for all DOM elements attributes in bookmark link to explore all of them in react syntax such as onClick, onChange, etc...
// // not dynamic so we make renderCounterApp function to make it dynamic by calling it when every we action on the buttons
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>Reset</button>
//   </div>
// );

// //Re-rendering is the process of updating the DOM with new elements. In the example above, we are re-rendering the templateTwo JSX expression every time the count variable changes. This is done by calling the ReactDOM.render function with the updated JSX expression and the appRoot element. This will update the DOM with the new JSX expression.
// // its not efficient so react provide us with a better way that we will learn later (react component)
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
