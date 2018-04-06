import React, { Component } from 'react';
import './App.css';
class Appscreen extends Component {
  render() {
    return (
      <section id="divider">
           <div className="container">
                <div className="row">

                     <div className="col-md-offset-2 col-md-8 col-sm-12">
                          <h2 className="wow fadeInUp" data-wow-delay="0.4s">Praesent tempor nec orci eu condimentum. Vestibulum varius lorem sed odio lacinia, ut efficitur tellus convallis. Phasellus convallis est nisi, sit amet accumsan ipsum elementum quis. Mauris ac sem mi.</h2>
                          <a href="#screenshot" className="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="0.8s">Learn More</a>
                     </div>

                </div>
           </div>
      </section>
    );
  }
}

export default Appscreen;
