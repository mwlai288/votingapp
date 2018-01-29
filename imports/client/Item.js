import React, { Component } from 'react';
import Items from '../api/Items';

class Item extends Component {
  voteOne = () => {
    Items.update(this.props.item._id, {
      $inc: {
        'itemOne.value': 1
      }
    });
  };

  voteTwo = () => {
    Items.update(this.props.item._id, {
      $inc: {
        'itemTwo.value': 1
      }
    });
  };

  render() {
    return (
      <div className="item">
        <div className="vote-one" onClick={this.voteOne}>
          <span>{this.props.item.itemOne.value}</span>
          <h2>{this.props.item.itemOne.text}</h2>
        </div>
        <span>vs</span>
        <div className="vote-two" onClick={this.voteTwo}>
          <span>{this.props.item.itemTwo.value}</span>
          <h2>{this.props.item.itemTwo.text}</h2>
        </div>
      </div>
    );
  }
}

export default Item;
