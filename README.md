grunt-peg
=========

grunt-peg provides a [grunt][1] multi task that generates parsers from
[PEG grammars][2].

Getting Started
---------------

Install this grunt plugin next to your project's [grunt.js
gruntfile][3] with: `npm install grunt-peg`

Then add this line to your project's `grunt.js` gruntfile:

    grunt.loadNpmTasks('grunt-peg');

Documentation
-------------

    grunt.initConfig({
      peg: {
        grammar: "grammar/example.peg",
	exportVar: "Example.parser",
	outputFile: "grammar/example.js"
      }
    });

License
-------

Copyright (c) 2012 Daan van Berkel
Licensed under the MIT license.

[1]: http://gruntjs.com/ "Grunt Homepage"
[2]: http://en.wikipedia.org/wiki/Parsing_expression_grammar "Wikipedia on PEG grammars"
[3]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md "Getting started documentation for grunt"

