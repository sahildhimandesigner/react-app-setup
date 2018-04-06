import React, { Component } from 'react';
import './App.css';
class Welcomenewapp extends Component {
  render() {
    return (
      <section id="about">
           <div className="container">
                <div className="row">
                     <div className="col-md-12 col-sm-12">
                          <div className="wow bounceIn section-title">
                               <h1>welcome to new app</h1>
                          </div>
                     </div>

                     <div className="wow fadeInUp col-md-6 col-sm-6">
                         <h2>Our Mobile App Team</h2>
                         <h3 className="wow fadeInUp">App Starter page is provided by templatemo that can be used for any site.</h3>
                         <p className="wow fadeInUp">This is a responsive <a href="https://plus.google.com/+templatemo" target="_blank">HTML CSS template</a> designed for your mobile app pages. You can modify and use it to fit your needs.</p>
                     </div>

                     <div className="wow fadeInUp col-md-3 col-sm-6">
                          <div className="about-thumb">

                                    <div className="about-overlay">
                                         <h3>Sandar Lynn</h3>
                                         <h4>UI Designer</h4>
                                         <ul className="social-icon">
                                              <li><a href="#" className="fa fa-facebook"></a></li>
                                              <li><a href="#" className="fa fa-instagram"></a></li>
                                              <li><a href="#" className="fa fa-twitter"></a></li>
                                         </ul>
                                    </div>
                          </div>
                     </div>

                      <div className="wow fadeInUp col-md-3 col-sm-6">
                          <div className="about-thumb">

                                    <div className="about-overlay">
                                         <h3>Candy </h3>
                                         <h4>UX Specialist</h4>
                                         <ul className="social-icon">
                                              <li><a href="#" classNameName="fa fa-pinterest"></a></li>
                                              <li><a href="#" classNameName="fa fa-behance"></a></li>
                                              <li><a href="#" classNameName="fa fa-google-plus"></a></li>
                                         </ul>
                                    </div>
                          </div>
                     </div>

                </div>
           </div>
      </section>


    );
  }
}

export default Welcomenewapp;
