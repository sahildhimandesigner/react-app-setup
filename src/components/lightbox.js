import React, { Component } from 'react';
class Lightbox extends Component {
  render() {
    return (
      <div className="modalpopup">
        <div className="modalcontainer">
            <h1>HELLO Everyone</h1>
            <button onClick={this.onView}>Close</button>
        </div>
      </div>
    );
  }
}

export default Lightbox;
