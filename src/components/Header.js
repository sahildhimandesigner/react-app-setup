import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header className="App-header">
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
              <li><a href="#pricing" className="smoothScroll">Pricing</a></li>
              <li><a href="#newsletter" className="smoothScroll">Newsletter</a></li>
      			</ul>
      		</div>
      	</div>
      </div>

      </header>
    );
  }
}

export default Header;
