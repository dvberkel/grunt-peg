/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2013 Daan van Berkel
 * Licensed under the MIT license.
 */

'use strict';

var PEG = require('pegjs');
var extend = require('extend');

var parserSource = function(grammar, exportVar, options){
  exportVar = exportVar || 'module.exports';
  options = extend({}, { cache: false, trackLineAndColumn: false }, options);
  var parser = PEG.buildParser(grammar, options);

  return exportVar + ' = ' + parser.toSource() + ';';
};

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('peg', 'Generates parsers from PEG grammars.', function() {
    grunt.log.write(grunt.template.process('Generating parser from <%= grammar %>', this));
    var grammar = grunt.file.read(this.data.grammar);
    grunt.file.write(this.data.outputFile, parserSource(grammar, this.data.exportVar, this.data.options));
  });
};
