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

                     <Apppricecomponent priceheading="$60" pricesubheading="Starter" />
                     <Apppricecomponent priceheading="$160" pricesubheading="Business" />
                     <Apppricecomponent priceheading="$200" pricesubheading="Advanced" />
                </div>
           </div>
      </section>

    );
  }
}

export default Appprice;
