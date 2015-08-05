import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  timeZone: DS.attr('string'),
  description: DS.attr('string'),

  swimLanes: DS.hasMany('swim-lane', { async: true })
});
