import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  shouldBackgroundReloadRecord(){
    return false;
  },
  pathForType: function(modelName) {
    var underscore = Ember.String.underscore(modelName);
    return Ember.String.pluralize(underscore);
  }
});
