import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Items from '../api/Items';
import Item from './Item';

import AccountsUI from './AccountsUI';

class App extends Component {
  addItems = e => {
    e.preventDefault();
    const itemOne = this.refs.itemOne.value;
    const itemTwo = this.refs.itemTwo.value;
    if (itemOne !== '' && itemTwo !== '') {
      Meteor.call('insertnewItem', itemOne, itemTwo, (err, res) => {
        if (!err) {
          this.refs.itemOne.value = '';
          this.refs.itemTwo.value = '';
        }
      });
    }
  };

  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <header>
          <h1>Vote!</h1>
          <AccountsUI />
        </header>
        <main>
          <form onSubmit={this.addItems} className="new-items">
            <input type="text" ref="itemOne" />
            <input type="text" ref="itemTwo" />
            <button type="submit">Add Items</button>
          </form>
          {this.props.items.map(item => {
            return <Item item={item} key={item._id} />;
          })}
        </main>
      </div>
    );
  }
}

export default withTracker(() => {
  let itemsSub = Meteor.subscribe('allItems');
  return {
    ready: itemsSub.ready(),
    items: Items.find().fetch()
  };
})(App);
