import React, { Component } from 'react';
import homeimg from '../images/homeimg.png';
class Banner extends Component {
  render() {
    return (
      <section id="home" className="main">
           <div className="overlay"></div>
      	<div className="container">
      		<div className="row">

                     <div className="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" data-wow-delay="0.2s">
                        <img src={homeimg} className="img-responsive" />
                     </div>

                     <div className="col-md-6 col-sm-7 col-xs-12">
                          <div className="home-thumb">
                          <h1 className="wow fadeInUp" data-wow-delay="0.6s">{this.props.heading}</h1>
                          <p className="wow fadeInUp" data-wow-delay="0.8s">{this.props.bannercontent}</p>
                          <a href="#pricing" className="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="1s">Download App</a>
                          </div>
                     </div>

      		</div>
      	</div>
      </section>
    );
  }
}

export default Banner;
