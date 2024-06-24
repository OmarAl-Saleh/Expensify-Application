import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
// L.66: ... rest : it use to destructure all the methods except that we call it such as isAuthenticated you can use any word after the dots not only rest
export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => {
      return isAuthenticated ? (
        <div>
          {" "}
          <Header /> <Component {...props} />{" "}
        </div>
      ) : (
        <Redirect to="/" />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
