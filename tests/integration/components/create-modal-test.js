import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-modal', 'Integration | Component | create modal', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{create-modal title='title'}}`);

  assert.equal(this.$('.modal-title').text().trim(), 'title');

  // Template block usage:
  this.render(hbs`
    {{#create-modal}}
      template block text
    {{/create-modal}}
  `);

  assert.equal(this.$('.modal-body').text().trim(), 'template block text');
});
