import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-default'],
  click() {
    this.get('onClick')();

    return false;
  },
});
