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

  showAll = () => {
    if (this.props.showAll) {
      Session.set('showAll', false);
    } else {
      Session.set('showAll', true);
    }
  };

  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    return (
      <main>
        <button onClick={this.showAll}>
          Show {this.props.showAll ? 'One' : 'All'}
        </button>
        <form onSubmit={this.addItems} className="new-items">
          <input type="text" ref="itemOne" />
          <input type="text" ref="itemTwo" />
          <button type="submit">Add Items</button>
        </form>
        {this.props.items.map(item => {
          return <Item item={item} key={item._id} />;
        })}
      </main>
    );
  }
}

export default withTracker(() => {
  let itemsSub = Meteor.subscribe('allItems');
  let showAll = Session.get('showAll');
  return {
    showAll,
    ready: itemsSub.ready(),
    items: Items.find(
      {},
      {
        limit: showAll ? 50 : 1,
        sort: { lastUpdated: 1 }
      }
    ).fetch()
  };
})(App);
