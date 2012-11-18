grunt-peg
=========

A grunt multi task that generates parsers from PEG grammars.

Getting Started
---------------

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-peg`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-peg');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

Documentation
-------------

```javascript
grunt.initConfig({
  peg: {
    grammar: "grammar/example.peg",
    exportVar: "Example.parser",
    outputFile: "grammar/example.js"
  }
});
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

Release History
---------------

_(Nothing yet)_

License
-------

Copyright (c) 2012 Daan van Berkel  
Licensed under the MIT license.
