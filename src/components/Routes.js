import React from "react";
import Dashboard from "../components/index";
import { Route, Switch,  BrowserRouter } from "react-router-dom";
import Login from "../authentication/Login";
import PrivateRoute from "../authentication/PrivateRoute";

function Routes(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
