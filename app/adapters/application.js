import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: "/api",
  shouldBackgroundReloadRecord(){
    return false;
  },
  pathForType: function(modelName) {
    var underscore = Ember.String.underscore(modelName);
    return Ember.String.pluralize(underscore);
  },
  headers: Ember.computed(function() {
    return {
      "X-XSRF-TOKEN": decodeURIComponent(Ember.get(document.cookie.match(/XSRF\-TOKEN\=([^;]*)/), "1"))
    };
  }).volatile(),
});
