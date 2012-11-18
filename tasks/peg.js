/*
 * grunt-peg
 * https://github.com/dvberkel/grunt-peg
 *
 * Copyright (c) 2012 Daan van Berkel
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('peg', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('peg'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('peg', function() {
    return 'peg!!!';
  });

};
