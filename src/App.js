import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
