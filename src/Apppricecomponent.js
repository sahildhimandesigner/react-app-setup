import React, { Component } from 'react';
import './App.css';
class Apppricecomponent extends Component {
  render() {
    return (


                     <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                          <div className="pricing-plan">
                               <div className="pricing-month">
                                    <h2>{this.props.priceheading}</h2>
                               </div>
                               <div className="pricing-title">
                                    <h3>{this.props.pricesubheading}</h3>
                               </div>
                               <p>40 Users</p>
                               <p>10GB per user</p>
                               <p>Unlimited Support</p>
                               <p>1 Year License</p>
                               <button className="btn btn-default section-btn">Register now</button>
                          </div>
                     </div>


    );
  }
}

export default Apppricecomponent;
