'use strict';

var extend = require('extend');

exports.peg = {
    default_options: function(test){
	var options = extend({}, { a: 0, b: 1}, { a: 1 });

	test.equal(options.a, 1)
	test.equal(options.b, 1)

	test.done();
    }
};
