import React, { Component } from 'react';
import './App.css';
class Appprice extends Component {
  render() {
    return (

      <section id="pricing">
           <div className="container">
                <div className="row">

                      <div className="col-md-12 col-sm-12">
                          <div className="section-title">
                               <h1>App Pricing</h1>                               
                          </div>
                     </div>

                     <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                          <div className="pricing-plan">
                               <div className="pricing-month">
                                    <h2>$60</h2>
                               </div>
                               <div className="pricing-title">
                                    <h3>Starter</h3>
                               </div>
                               <p>40 Users</p>
                               <p>10GB per user</p>
                               <p>Unlimited Support</p>
                               <p>1 Year License</p>
                               <button className="btn btn-default section-btn">Register now</button>
                          </div>
                     </div>

                     <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
                          <div className="pricing-plan">
                               <div className="pricing-month">
                                    <h2>$120</h2>
                               </div>
                               <div className="pricing-title">
                                    <h3>Business</h3>
                               </div>
                               <p>100 Users</p>
                               <p>20GB per user</p>
                               <p>Unlimited Support</p>
                               <p>2 Years License</p>
                               <button className="btn btn-default section-btn">Register now</button>
                          </div>
                     </div>

                     <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.8s">
                          <div className="pricing-plan">
                               <div className="pricing-month">
                                    <h2>$200</h2>
                               </div>
                               <div className="pricing-title">
                                    <h3>Advanced</h3>
                               </div>
                               <p>200 Users</p>
                               <p>30GB per user</p>
                               <p>Unlimted Support</p>
                               <p>3 Years License</p>
                               <button className="btn btn-default section-btn">Register now</button>
                          </div>
                     </div>

                </div>
           </div>
      </section>

    );
  }
}

export default Appprice;
