import React, { Component } from 'react';
class Lightbox extends Component {
  render() {
    return (
      <div className="modalpopup">
        <div className="modalcontainer">
        <div className="modal-header">
          <button className="pull-right" onClick={this.onView}>Close</button>

        </div>
        <div className="modal-body">
        <h1>Subscribe Newsletter</h1>
        <p>Maecenas orci sem, mollis quis risus a, venenatis condimentum felis. Integer ut bibendum ipsum. Etiam a tristique sapien, ut dictum augue.</p>
        </div>

        </div>
      </div>
    );
  }
}

export default Lightbox;
