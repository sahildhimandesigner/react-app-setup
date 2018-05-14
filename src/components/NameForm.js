import React, { Component } from 'react';
import axios from 'axios';
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', ferror: '', lname: '', lerror: '', username:'', email: '', emailerror: '', unamedetails: '', userimage: ''};
    this.fnameChange = this.fnameChange.bind(this);
    this.lnameChange = this.lnameChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  fnameChange(event) {
    this.setState({fname: event.target.value});
    if (this.state.fname != ''){
       this.setState({ferror:''})
    }
  }
  lnameChange(event) {
    this.setState({lname: event.target.value});
    if (this.state.lname != ''){
       this.setState({lerror:''})
    }
  }
  usernameChange(event) {
    this.setState({username: event.target.value});
    if (this.state.username != ''){
       this.setState({uerror:''})
    }
  }
  emailChange(event) {
    this.setState({email: event.target.value});
    if (this.state.emailerror != ''){
       this.setState({emailerror:''})
    }
  }
  handleSubmit() {
    axios.get('https://api.github.com/users/'+ this.state.fname +'')
         .then((response) => {
            console.log(response)
           this.setState({
             unamedetails:response.data.name,
             userimage:response.data.avatar_url
           })
   });
    if (this.state.fname === ''){
       this.setState({ferror:'Enter your name'})
    }
    else if (this.state.lname === ''){
       this.setState({lerror:'Enter your Lastname'})
    }
    else if (this.state.username === ''){
       this.setState({uerror:'Enter your Username'})
    }
    else if (this.state.email === ''){
       this.setState({emailerror:'Enter your email'})
    }
    else {
    alert('A name was submitted: ' + this.state.fname + this.state.lname + this.state.username + this.state.email);

  }
}
  render() {
    return (
      <form className="col-md-12 col-lg-12 col-sm-12">

        <div className="row form-group">
          <label> First Name:</label>
          <input className="form-control" name="fname" type="text" value={this.state.fname} onChange={this.fnameChange} />
          <span className="text-danger pull-left">{this.state.ferror}</span>
        </div>
        <div className="row form-group">
        <label> Last Name:</label>
            <input className="form-control" name="lname" type="text" value={this.state.lname} onChange={this.lnameChange} />
              <span className="text-danger pull-left">{this.state.lerror}</span>

        </div>
        <div className="row form-group">
        <label>User Name:</label>
            <input className="form-control" name="username" type="text" value={this.state.uname} onChange={this.usernameChange} />
              <span className="text-danger pull-left">{this.state.uerror}</span>

        </div>
        <div className="row form-group">
        <label> Email: </label>
        <input className="form-control" name="email" type="text" value={this.state.email} onChange={this.emailChange} />
        <span className="text-danger pull-left">{this.state.emailerror}</span>

        </div>
        <input className="btn btn-primary" type="button" value="Submit" onClick={this.handleSubmit} />
        <p>{this.state.unamedetails}</p>
        <p><img src={this.state.userimage} /></p>
      </form>

    )
  }
}

export default NameForm;
