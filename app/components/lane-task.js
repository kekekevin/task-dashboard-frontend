import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "a",
  classNames: ["list-group-item"],
  attributeBindings: ['href', "draggable"],
  href: "#",
  draggable: true,

  dragStart(event) {
    return event.dataTransfer.setData("text/data", this.get("task"))
  }
});
