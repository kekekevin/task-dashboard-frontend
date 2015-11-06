import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.$('.modal').modal('hide');
      this.get('onSave')();
    },
  },
});
