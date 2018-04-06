import React, { Component } from 'react';
import './App.css';
import Apppricecomponent from './Apppricecomponent'
class Appprice extends Component {
  render() {
    return (
      <section id="newsletter">
           <div className="overlay"></div>
           <div className="container">
                <div className="row">

                     <div className="col-md-offset-2 col-md-8 col-sm-12">
                          <div className="wow bounceIn section-title">
                               <h2>Subscribe Newsletter</h2>
                               <p className="wow fadeInUp" data-wow-delay="0.5s">Maecenas orci sem, mollis quis risus a, venenatis condimentum felis. Integer ut bibendum ipsum. Etiam a tristique sapien, ut dictum augue.</p>
                          </div>
                          <div className="wow fadeInUp newsletter-form" data-wow-delay="0.8s">
                               <form action="#" method="post">
                                    <div className="col-md-8 col-sm-7">

                                 	  </div>
                                    <div className="col-md-4 col-sm-5">
                                         
                                    </div>
                               </form>
                          </div>
                     </div>

                </div>
           </div>
      </section>

    );
  }
}

export default Appprice;
