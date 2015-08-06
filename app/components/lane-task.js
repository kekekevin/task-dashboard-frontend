import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['list-group-item'],
  attributeBindings: ['href'],
  href: "#"
});
