import React, { Component } from 'react';
class Aboutcontent extends Component {
  render() {
    return (
       <div className="col-lg-4 col-md-4 aboutcontent">
              <h3>{this.props.featureheading}</h3>
              <p>{this.props.featurecontent}</p>
           </div>

    );
  }
}

export default Aboutcontent;
