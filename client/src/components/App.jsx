import React from 'react';
import Home from './ChirpsFeed';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import Chirp from './Chirp';

const Navigation = () => {


  return (
    <Router>
      <div className="container">
        <Switch>
            <Route exact path = "/" component={Home} />
             {/* <Route exact path = "/chirps/id/edit" component ={}/> */}
            <Route path = "/chirps/:id" component ={Chirp}/> 
            
        </Switch>

      </div>

    </Router>


  );
}


export default Navigation;
