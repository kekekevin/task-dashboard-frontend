import Ember from 'ember';

export default Ember.Controller.extend({
  swimLaneForTask(taskId) {
    this.model
  },
  actions: {
    addTask(taskId, swimLaneId) {
      var self = this;
      var task = this.store.find("task", taskId).then(function(task) {
        var toSwimLane = self.store.find("swim-lane", swimLaneId).then(function(swimLane) {
          swimLane.get("tasks").pushObject(task);
        });
      });
      var fromSwimLane = this.model.get("swimLanes").find(function(item, index, iterable) {
        return item.get("tasks").contains(task)
      });
    }
  }
});
