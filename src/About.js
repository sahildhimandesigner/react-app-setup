import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from './components/Header';
import Welcomenewapp from './components/Welcomenewapp';
import Footer from './components/Footer';
import Banner from './components/Banner';


class About extends Component {
  render() {
    return (
      <div className="About">
      <Header />
      <Banner heading="App Starter Page" bannercontent="The optimal way to present your beautiful mobile app for your startup team. Let us create amazing things!" />
      <Welcomenewapp />
      <Footer />
      </div>
    );
  }
}

export default About;
