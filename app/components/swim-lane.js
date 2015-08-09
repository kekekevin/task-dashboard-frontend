import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-md-3'],

  dragLeave(event) {
    event.preventDefault();
  },

  dragOver(event) {
    event.preventDefault();
  },

  drop(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text/data");
    this.sendAction('dropped', data);
  }
});
