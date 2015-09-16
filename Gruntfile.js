/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2013 Daan van Berkel
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

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
          src: 'test/fixtures/a.peg',
          dest: 'tmp/default_options_standard'
      },
      custom_options: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/custom_options_standard',
          options: { exportVar: 'Namespace.parser' }
      },
      passing_options: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/passing_options_standard',
          options: { cache: true }
      },
      plugin_options: {
          src: 'test/fixtures/coffee-plugin.peg',
          dest: 'tmp/plugin_options_standard',
          options: { plugins: [ './test/test_plugin' ] }
      },
      angular_options: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/angular_options_standard',
          options: {
            angular: { module: 'pegjs', factory: 'exampleParser' }
          },
          foo: 'bar'
      },
      angular_options_backcompat: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/angular_options_backcompat',
          angular: { module: 'pegjs', factory: 'exampleParser' }
      },
      exportVar_options: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/exportVar_options_standard',
          options: { exportVar: function(src){ return path.basename(src[0], '.peg'); } }
      },
      wrapper_options: {
          src: 'test/fixtures/a.peg',
          dest: 'tmp/wrapper_options_standard',
          options: {
            wrapper: function (src, parser) {
              return 'define(function () { return ' + parser + '; });';
            }
          }
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
