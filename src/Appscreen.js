import React, { Component } from 'react';
import './App.css';
class Appscreen extends Component {
  render() {
    return (
<section id="screenshot">
     <div className="container">
          <div className="row">
               <div className="col-md-offset-2 col-md-8 col-sm-12">
                    <div className="section-title">
                         <h1>App Screenshots</h1>
                         <p className="wow fadeInUp" data-wow-delay="0.8s">Nulla nisi purus, ultrices et scelerisque at, ullamcorper et ex. Phasellus at nisi lobortis, semper tortor sed, gravida neque.</p>
                    </div>
               </div>
               <div id="screenshot-carousel" className="owl-carousel">
                    <div className="item col-md-3 col-sm-3 wow fadeInUp">

                    </div>
               </div>
          </div>
     </div>
</section>
    );
  }
}

export default Appscreen;
