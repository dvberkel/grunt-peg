/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2013 Daan van Berkel
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    peg: {
      default_options: {
          grammar: 'test/fixtures/a.peg',
          outputFile: 'tmp/default_options'
      },
      custom_options: {
          grammar: 'test/fixtures/a.peg',
          exportVar: 'Namespace.parser',
          outputFile: 'tmp/custom_options'
      },
      passing_options: {
          grammar: 'test/fixtures/a.peg',
          outputFile: 'tmp/passing_options',
          options: { cache: true }
      },
      default_options_standard: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/default_options_standard'
      },
      custom_options_standard: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/custom_options_standard',
          options: { exportVar: 'Namespace.parser' }
      },
      passing_options_standard: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/passing_options_standard',
          options: { cache: true }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    // Bump version
    bumpup: {
      file: 'package.json'
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-bumpup');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'peg', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
