import React from 'react';
import AdminDashboard from '../components/adminDashboard';
import { Route, Switch } from "react-router-dom";
import Login from '../authentication/Login';
import PrivateRoute from '../authentication/PrivateRoute';

function Routes(props) {

  return (
    <div>
      <Switch>
        <Route path='/login' render={(props) => <Login {...props} />} />
        {/* <PrivateRoute exact path="/dashboard" render={() => 
          <>
            <AdminDashboard />
          </>}/>  */}
                  <Route exact path="/dashboard" render={() => 
          <>
            <AdminDashboard />
          </>}/> 

       
      </Switch>
    </div>
  );
}

export default Routes;