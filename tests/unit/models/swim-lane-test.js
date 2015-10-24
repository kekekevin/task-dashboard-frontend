import { moduleForModel, test } from 'ember-qunit';

moduleForModel('swim-lane', 'Unit | Model | swim lane', {
  // Specify the other units that are required for this test.
  needs: ['model:task', 'model:board']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
