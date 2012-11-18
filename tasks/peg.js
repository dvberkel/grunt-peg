/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2012 Daan van Berkel
 * Licensed under the MIT license.
 */

var PEG = require('pegjs');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('peg', 'Generate a parser from a PEG grammar', function() {
    grunt.log.write(grunt.template.process("Generating parser from <%= grammar %>", this.data));
    var grammar = grunt.file.read(this.data.grammar);
    grunt.file.write(this.data.outputFile, grunt.helper('peg', grammar, this.data.exportVar));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('peg', function(grammar, exportVar) {
    exportVar = exportVar || "module.exports";
    var parser = PEG.buildParser(grammar);

    return exportVar + " = " + parser.toSource() + ";";
  });

};
