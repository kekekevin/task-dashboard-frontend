import { moduleForModel, test } from 'ember-qunit';

moduleForModel('board', 'Unit | Model | board', {
  // Specify the other units that are required for this test.
  needs: ['model:swim-lane']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
