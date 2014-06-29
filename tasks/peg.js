/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2013 Daan van Berkel
 * Licensed under the MIT license.
 */

'use strict';

var PEG  = require('pegjs');
var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('peg', 'Generates parsers from PEG grammars.', function() {
    // Standard Grunt "src(s) -> dest" support.
    var files = this.files;

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      exportVar: 'module.exports',
      output: 'source',
      plugins: []
    });

    // backwards compatibility:
    if (this.data.angular && !options.angular) {
      options.angular = this.data.angular;
    }

    if (!options.wrapper) {
      options.wrapper = function (src, parser) {
        if (options.angular) {
          return 'angular.module(\'' + options.angular.module + '\', []).factory(\'' + options.angular.factory + '\', function () { return ' + parser + '});';
        } else {
          if (typeof options.exportVar === 'function') {
            return options.exportVar(src) + ' = ' + parser + ';';
          } else {
            return (typeof options.exportVar === 'string' ? options.exportVar : 'module.exports') + ' = ' + parser + ';';
          }
        }
      };
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

      // Require all plugins just like the pegjs CLI
      options.plugins = options.plugins.map(function(plugin){
        var id = /^(\.\/|\.\.\/)/.test(plugin) ? path.resolve(plugin) : plugin;
        var mod;
        try {
          mod = require(id);
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND") { grunt.fail.fatal(e); }

          grunt.fail.fatal('Can\'t load module \'' + id + '\'.');
        }

        return mod;
      });

      // Generate the parser.
      var time = Date.now();
      var parser = PEG.buildParser(grammar, options);
      time = Date.now() - time;

      // Save the parser.
      grunt.file.write(f.dest, options.wrapper(src, parser));

      grunt.log.writeln('Parser "' + f.dest + '" generated in ' + time + 'ms.');
    });
  });
};
