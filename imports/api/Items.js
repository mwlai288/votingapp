import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish('allItems', function() {
    return Items.find();
  });

  Meteor.methods({
    insertnewItem(itemOne, itemTwo) {
      check(itemOne, String);
      check(itemTwo, String);
      Items.insert({
        itemOne: {
          text: itemOne,
          value: 0
        },
        itemTwo: {
          text: itemTwo,
          value: 0
        }
      });
    },
    voteOnItem(item, position) {
      if (Meteor.userId()) {
        if (position === 'itemOne') {
          Items.update(item._id, {
            $inc: {
              'itemOne.value': 1
            }
          });
        } else {
          if (position === 'itemTwo') {
            Items.update(item._id, {
              $inc: {
                'itemTwo.value': 1
              }
            });
          } else {
            alert('Please create an account to add item and vote.');
          }
        }
      }
    }
  });
}

export default Items;
