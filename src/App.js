import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Homewidget from './Homewidget';
import Welcomenewapp from './Welcomenewapp';
import Banner from './Banner';
import Pricing from './Pricing';
import Appscreen from './Appscreen';
import Appprice from './Appprice';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Pricing heading="test" />
        <Welcomenewapp />
        <Homewidget />
        <Appscreen heading="welcome sahi" />
        <Appprice />
        <Footer />
      </div>
    );
  }
}

export default App;
