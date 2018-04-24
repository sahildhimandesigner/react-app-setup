import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import About from '../container/About';
import Lightbox from '../components/lightbox';
class Header extends Component {
constructor (props)  {
  super(props);
  this.state={
    ShowHI: false,
  };
  this.onView = this.onView.bind(this);
  this.onClose = this.onClose.bind(this);
}
onView(){
  this.setState({
    ShowHI: true
  });
}
onClose(){
  this.setState({
    ShowHI: false
  });
}
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
            <li><Link to ="/">Home</Link></li>
      				<li><Link to ="/about">About</Link></li>
              <li><Link to ="/faq">Faq</Link></li>
              <li><a href="#newsletter" className="smoothScroll" onClick={this.onView}>Login</a></li>
      			</ul>
      		</div>
          {(this.state.ShowHI=== true) ?
            <div className="modalpopup">
              <div className="modalcontainer">
              <div className="modal-header">
        <h5 className="modal-title pull-left">Enter Your Details</h5>
        <button className="pull-right close" onClick={this.onClose} type="button" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">×</span>
  </button>
      </div>

              <Lightbox /></div></div> : ""}
      	</div>
      </div>
    </header>
    );
  }
}

export default Header;
