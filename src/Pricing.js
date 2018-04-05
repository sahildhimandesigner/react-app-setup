import React, { Component } from 'react';
import PricingBlock from './PricingBlock'
import './App.css';
class Pricing extends Component {
  render() {
    return (
      <section>
        <h1>{this.props.heading}</h1>
        <PricingBlock test="ABC" />
        <PricingBlock test="vxc" />
        <PricingBlock test="cb" />
    </section>
    );
  }
}

export default Pricing;
