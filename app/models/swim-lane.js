import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  days: DS.attr('number'),
  order: DS.attr('number')
});
