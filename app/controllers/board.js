import Ember from 'ember';

export default Ember.Controller.extend({
  task: Ember.computed(function() {
    return this.store.createRecord('task', {
      summary: 'test'
    });
  }),
  actions: {
    addTask(taskId, swimLaneId) {
      this.store.find("task", taskId).then((task) => {
        this.store.find("swim-lane", swimLaneId).then((swimLane) => {
          var tasks = swimLane.get("tasks");
          tasks.pushObject(task);
          task.save();
        });
      });
    },
    showModal() {
      const task = this.store.createRecord('task');
      task.set('board', this.get('model'));
      this.set('task', task);

      Ember.$("#add-task-modal").modal();
    },
    saveTask() {
      this.get('task').save();
    },
  }
});
