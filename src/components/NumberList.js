import React, { Component } from 'react';
import ListItem from './Faqcomponent';
import Faqcontent from './Faqcontent.json';


class NumberList extends Component{
  render() {
  const listItems = this.props.data.map((item) =>
    <div>
      <h3>{item.lable}</h3>
      <p>{item.Value}</p>
    </div>
  );
  return (
    <ul className="faqlist">
      {listItems}
    </ul>
  );
}
}
export default NumberList;
