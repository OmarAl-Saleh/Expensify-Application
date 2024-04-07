//* L.35 challenge

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    // this.visible = false;
    // this.ButtonName = "Show Details";
	  this.handleVisibility = this.handleVisibility.bind(this);
	  this.state = { visible: false, ButtonName: "Show Details" };
  }

  handleVisibility() {
    this.setState((prev) => {
      if (!prev.visible) {
        return {
          visible: true,
          ButtonName: "Hide Details",
        };
      } else {
        return {
          visible: false,
          ButtonName: "Show Details",
        };
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>{this.state.ButtonName}</button>
        {this.state.visible && <p>Itachi is your Uncle</p>}
      </div>
    );
  }
}
const app = ReactDOM.render(
  <VisibilityToggle />,
  document.getElementById("app")
);
// //L.21 build it challenge

// const appRoot = document.getElementById("app");
// let show = true;
// const DetailsRendering = () => {
// 	if (show)
// 		show = false;
// 	else
// 		show = true;
// 	Render();
// };

// const onButtonName = () => {
// 	  if (show) {
// 	return "Hide Details";
//   } else {
// 	return "Show Details";
//   }

// }
// const Render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
// 		  <button onClick={DetailsRendering}>{onButtonName()}</button>
// 		  {show&&<p>Itachi is your uncle</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };
// Render();
