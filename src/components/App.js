import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './login'

function App() {


    return(
        <Router>

     
        <div>
            
            <Link to = "/login">Login</Link>
        </div>


        <Switch>
            <Route path = "/login" component = {Login} />
           
        </Switch>

        </Router>
    )
}
export default App;