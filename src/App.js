import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import Pricing from './Pricing';
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
        <Appprice pricemainheading="App Pricing" />
        <Footer />
      </div>
    );
  }
}

export default App;
