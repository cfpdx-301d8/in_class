QUnit.test('first test', function(assert) {
  assert.ok(true === false);
});

QUnit.test('say hi test', function(assert) {
  var testName = 'test';

  var result = sayHi(testName);

  assert.equal(result, 'Hello, test');
});