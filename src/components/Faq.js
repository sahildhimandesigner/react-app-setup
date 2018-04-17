import React, { Component } from 'react';
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const ListItem = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {ListItem}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
class Faq extends Component {
  render() {
    return (
      <div>
          <NumberList numbers={numbers} />,
      </div>
    );
  }
}

export default Faq;
