import React, { Component } from 'react';
import ListItem from './Faqcomponent';


class NumberList extends Component{
  render() {
  const numbers = this.props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul className="faqlist"> 
      {listItems}
    </ul>
  );
}
}
export default NumberList;
