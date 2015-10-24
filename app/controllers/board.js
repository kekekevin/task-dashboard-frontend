import Ember from 'ember';

export default Ember.Controller.extend({
  swimLaneForTask() {
    return this.model;
  },
  actions: {
    addTask(taskId, swimLaneId) {
      var self = this;
      this.store.find("task", taskId).then(function(task) {
        self.store.find("swim-lane", swimLaneId).then(function(swimLane) {
          swimLane.get("tasks").pushObject(task);
        });
      });
    }
  }
});
