import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import Welcomenewapp from '../components/Welcomenewapp';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Appprice from '../components/Appprice';
import Subscribe from '../components/Subscribe';
import Appscreen from '../components/Appscreen';



class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Banner heading="App Starter Page" bannercontent="The optimal way to present your beautiful mobile app for your startup team. Let us create amazing things!" />
        <Welcomenewapp />
        <Appscreen welcomeheading="Praesent tempor nec orci eu condimentum. Vestibulum varius lorem sed odio lacinia, ut efficitur tellus convallis. Phasellus convallis est nisi, sit amet accumsan ipsum elementum quis. Mauris ac sem mi." />
        <Appprice pricemainheading="App Pricing" />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
