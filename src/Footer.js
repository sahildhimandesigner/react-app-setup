import React, { Component } from 'react';
import './App.css';
class Footer extends Component {
  render() {
    return (
      <footer>
      	<div className="container">
      		<div className="row">

                     <div className="col-md-8 col-sm-6">
                          <div className="wow fadeInUp footer-copyright" data-wow-delay="0.4s">
                               <p>Copyright &copy; 2016 Your App Starter
                               <span>||</span>
                               Design: <a href="https://plus.google.com/+templatemo" title="free css templates" target="_blank">Templatemo</a></p>
                          </div>
                     </div>

      			<div className="col-md-4 col-sm-6">
      				<ul className="wow fadeInUp social-icon" data-wow-delay="0.8s">
                   <li><a href="#" className="fa fa-facebook"></a></li>
                   <li><a href="#" className="fa fa-twitter"></a></li>
                   <li><a href="#" className="fa fa-google-plus"></a></li>
                   <li><a href="#" className="fa fa-dribbble"></a></li>
                   <li><a href="#" className="fa fa-linkedin"></a></li>
              </ul>
           </div>

      		</div>
      	</div>
      </footer>
    );
  }
}

export default Footer;
