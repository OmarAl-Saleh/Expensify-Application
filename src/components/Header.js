import React from "react";
// here we can remove return and use the implicit return because we have only one expression
const Header = (props) => {
  //L.41 : here we can the update  subtitle to be shown if the title is not the default value just you have to delete it in header props to be activated
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && (
          <h2 className="header__subtitle">{props.subtitle}</h2>
        )}
      </div>
    </div>
  );
};

//L.41 : if we want to define a default value for the props we can use the defaultProps property and choose what props we want to define a default value for it
Header.defaultProps = {
  title: "Indecision",
};

export default Header;
