import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import Header from './components/Header';
import Aboutcontent from './components/Aboutcontent';
import Footer from './components/Footer';
import Aboutbanner from './components/Aboutbanner';


class About extends Component {
  render() {
    return (
      <section id="aboutuscontent">
      <div className="About">
      <Header />
      <Aboutbanner heading="Hashnews" bannercontent="Modern Magazine & Newspaper HTML Template" aboutcontent="A perfect multi-concept template for Magazine & Newspaper websites. Nice and clean design." />
      <div className="container top-margin-30">
      <Aboutcontent featureheading="Responsive Design" featurecontent="Hashnews is supper responsive & work perfectly in all devices." />
      <Aboutcontent featureheading="User Friendly" featurecontent="Hashnews easy to use for any technical & nontechnical People." />
      <Aboutcontent featureheading="Creative Design" featurecontent="It's comes with creative & smart design layout." />

      <Aboutcontent featureheading="Icon Font" featurecontent="It's comes with most popular FontAwesome & Pe 7 stroke icon font." />
      <Aboutcontent featureheading="Google Font" featurecontent="600 Google Fonts. You can change font for all elements easily." />
      <Aboutcontent featureheading="Ajax Contact Form" featurecontent="It comes with ajax contact form which makes messaging much more quicker." />
      </div>
      <Footer />
      </div>
      </section>
    );
  }
}

export default About;
