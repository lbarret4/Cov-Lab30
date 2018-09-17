import React from 'react';
import ChirpsFeed from './ChirpsFeed';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';

const Navigation = () => {


  return (
    <Router>
      <div className="container">
      
        <Header />
        <ChirpsFeed />
      </div>

    </Router>


  );
}


export default Navigation;
