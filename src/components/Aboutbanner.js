import React, { Component } from 'react';
class Aboutbanner extends Component {
  render() {
    return (
      <section id="home" className="main">
           <div className="overlay"></div>
      	<div className="container">
      		<div className="row">



                     <div className="col-md-12 col-sm-12 col-xs-12 content-align-center">
                          <div className="home-thumb">
                          <h1 className="wow fadeInUp font-32 bottom-margin-30" data-wow-delay="0.6s">{this.props.heading}</h1>
                          <p className="wow fadeInUp font-26 bottom-margin-30" data-wow-delay="0.8s">{this.props.bannercontent}</p>
                          <p className="wow fadeInUp font-20 bottom-margin-30" data-wow-delay="0.8s">{this.props.aboutcontent}</p>
                          </div>
                     </div>

      		</div>
      	</div>
      </section>
    );
  }
}

export default Aboutbanner;
