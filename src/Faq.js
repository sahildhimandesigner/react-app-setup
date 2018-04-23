import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from './components/Header';
import Aboutcontent from './components/Aboutcontent';
import Footer from './components/Footer';
import Aboutbanner from './components/Aboutbanner';
import NumberList from './components/NumberList';


class Faq extends Component {

  render() {
    const numbers = ["What is MeasureMatch?", "Which services are available via MeasureMatch?", "What is the MeasureMatch backstory?", "Who are MeasureMatch Experts?", "Who are MeasureMatch Buyers?", "What is MeasureMatch trying to achieve?", "Who should sign up?", "Why should Experts (i.e. freelancers) sign up?", "Why should Buyers sign up?", "What is MeasureMatch’s relationship with Buyers & Experts?", "Why should consultancies or agencies (large or small) sign up to sell their services?"];
    return (
      <section id="aboutuscontent">
      <div className="About">
      <Header />
      <Aboutbanner heading="FAQ" bannercontent="Here are some of the most commonly asked questions on the platform." />
      <div className="container top-margin-30">

      <NumberList numbers={numbers} />
      </div>
      <Footer />
      </div>
      </section>
    );
  }
}

export default Faq;
