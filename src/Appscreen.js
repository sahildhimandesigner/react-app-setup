import React, { Component } from 'react';
import './App.css';
class Appscreen extends Component {
  render() {
    return (
      <section id="divider">
           <div className="container">
                <div className="row">

                     <div className="col-md-offset-2 col-md-8 col-sm-12">
                          <h2 className="wow fadeInUp" data-wow-delay="0.4s">{this.props.welcomeheading}</h2>
                          <a href="#screenshot" className="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="0.8s">Learn More</a>
                     </div>

                </div>
           </div>
      </section>
    );
  }
}

export default Appscreen;
