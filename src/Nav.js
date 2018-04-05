import React, { Component } from 'react';
import './App.css';
class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
      	<div className="container">
      		<div className="navbar-header">
      			<button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      				<span className="icon icon-bar"></span>
      				<span className="icon icon-bar"></span>
      				<span className="icon icon-bar"></span>
      			</button>
      			<a href="index.html" className="navbar-brand"><span>App</span> Starter</a>
      		</div>
      		<div className="collapse navbar-collapse">
      			<ul className="nav navbar-nav navbar-right">
      				<li><a href="#home" className="smoothScroll">Home</a></li>
      				<li><a href="#about" className="smoothScroll">About</a></li>
      				<li><a href="#screenshot" className="smoothScroll">Screenshots</a></li>
              <li><a href="#pricing" className="smoothScroll">Pricing</a></li>
              <li><a href="#newsletter" className="smoothScroll">Newsletter</a></li>
          		<li><a href="#" data-toggle="modal" data-target="#modal1">Contact</a></li>
      			</ul>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Header;
