import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faq from './Faq';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/faq' component={Faq}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
