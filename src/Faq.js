import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from './components/Header';
import Aboutcontent from './components/Aboutcontent';
import Footer from './components/Footer';
import Aboutbanner from './components/Aboutbanner';
import NumberList from './components/NumberList';
import Faqcontent from './components/Faqcontent.json';


class Faq extends Component {
  render() {
    return (
      <section id="aboutuscontent">
      <div className="About">
      <Header />
      <Aboutbanner heading="FAQ" bannercontent="Here are some of the most commonly asked questions on the platform." />
      <div className="container top-margin-30">
         <NumberList data={Faqcontent.Question} />
      </div>
      <Footer />
      </div>
      </section>
    );
  }
}

export default Faq;
