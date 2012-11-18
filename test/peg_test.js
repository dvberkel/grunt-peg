var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['peg'] = {
  // setUp: function(done) {
  //   grunt.file.write('test_data/a.js', grunt.helper('peg', "start = 'a'"));
  //   done();
  // },
  'helper': function(test) {
    var expected = grunt.file.read('test_data/a.js')
    test.equal(grunt.helper('peg', "start = 'a'"), expected, 'should return a proper grammar');
    test.done();
  },
};
