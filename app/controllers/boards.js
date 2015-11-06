import Ember from 'ember';

export default Ember.Controller.extend({
  timeZones: [
    'Central Time (US & Canada)',
    'Eastern Time (US & Canada)',
    'Mountain Time (US & Canada)',
    'Pacific Time (US & Canada)'
  ],
  actions: {
    showModal() {
      this.set('board', this.store.createRecord('board'));
      Ember.$('.modal').modal();
    },
    saveBoard() {
      this.get('board').save();
      Ember.$('.modal').modal('hide');
    },
  },
});
