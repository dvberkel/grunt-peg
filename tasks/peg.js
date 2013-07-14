/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2013 Daan van Berkel
 * Licensed under the MIT license.
 */

'use strict';

var PEG = require('pegjs');

module.exports = function(grunt) {
  grunt.registerMultiTask('peg', 'Generates parsers from PEG grammars.', function() {
    // Standard Grunt "src(s) -> dest" support.
    var files = this.files;

    // Legacy "grammar -> outputFile" support.
    if(this.data.grammar && this.data.outputFile) {
      files.push({
        src: [this.data.grammar],
        dest: this.data.outputFile
      });
    }

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      exportVar: 'module.exports',
      // add the output: source option for new versions of peg.
      output: 'source'
    });

    // Legacy "exportVar" support.
    if(this.data.exportVar) {
      options.exportVar = this.data.exportVar;
    }

    // Iterate over all src-dest file pairs.
    files.forEach(function(f) {
      // Warn on and remove invalid source files (if nonull was set).
      var src = f.src.filter(function(filepath) {
        if(!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      grunt.log.writeln('Generating parser from "' + src.join('", "') + '"...');

      // Read in all source files and concatenate with newlines.
      var grammar = src.map(function(filepath) {
        return grunt.file.read(filepath);
      }).join(grunt.util.linefeed);

      // Generate the parser.
      var time = Date.now();
      var parser = PEG.buildParser(grammar, options);
      time = Date.now() - time;

      // check if it is a new version from peg
      // that returns a string if the 'output' : 'source' option is specified
      var source = typeof(parser) === 'string' ? parser: parser.toSource();

      // Save the parser.
      grunt.file.write(f.dest, options.exportVar + ' = ' + source + ';');

      grunt.log.writeln('Parser "' + f.dest + '" generated in ' + time + 'ms.');
    });
  });
};
