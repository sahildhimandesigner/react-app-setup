import React, { Component } from 'react';
import './App.css';
import Apppricecomponent from './Apppricecomponent'
class Appprice extends Component {
  render() {
    return (
      <section id="pricing">
           <div className="container">
                <div className="row">
                      <div className="col-md-12 col-sm-12">
                          <div className="section-title">
                               <h1>{this.props.pricemainheading}</h1>
                          </div>
                     </div>

                     <Apppricecomponent priceheading="$60" pricesubheading="Starter" usercount="40 Users" userusage="10GB per user" unlimitedsupoort="Unlimited Support" wranty="1 Year License" />
                     <Apppricecomponent priceheading="$160" pricesubheading="Business" usercount="100 Users" userusage="20GB per user" unlimitedsupoort="Unlimited Support" wranty="2 Year License"  />
                     <Apppricecomponent priceheading="$200" pricesubheading="Advanced" usercount="200 Users" userusage="30GB per user" unlimitedsupoort="Unlimited Support" wranty="3 Year License"  />
                </div>
           </div>
      </section>

    );
  }
}

export default Appprice;
