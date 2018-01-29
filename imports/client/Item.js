import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="vote-one">
          <span>{this.props.item.itemOne.value}</span>
          <h2>{this.props.item.itemOne.text}</h2>
        </div>
        <span>vs</span>
        <div className="vote-two">
          <span>{this.props.item.itemTwo.value}</span>
          <h2>{this.props.item.itemTwo.text}</h2>
        </div>
      </div>
    );
  }
}

export default Item;
