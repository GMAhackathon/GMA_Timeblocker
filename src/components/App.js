import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './login'
import Register from './Register';

function App() {


    return(
        <Router>

     
        <div>
            
            <Link to = "/login">Login</Link>
            <Link to = "/register">Register</Link>
        </div>


        <Switch>
            <Route path = "/login" component = {Login} />
           <Route path = "/register" component = {Register} />
        </Switch>

        </Router>
    )
}
export default App;