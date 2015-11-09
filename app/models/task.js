import DS from 'ember-data';

export default DS.Model.extend({
  summary: DS.attr('string'),
  description: DS.attr('string'),
  dueDate: DS.attr('date'),

  swimLane: DS.belongsTo('swim-lane'),
  board: DS.belongsTo('board')
});
