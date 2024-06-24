import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
// L.66: ... rest : it use to destructure all the methods except that we call it such as isAuthenticated you can use any word after the dots not only rest
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) => {
      return isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
