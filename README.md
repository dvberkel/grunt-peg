grunt-peg
=========

> A grunt multi task that generates parsers from PEG grammars.

Getting Started
---------------

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt][] before, be sure to check out the
[Getting Started][] guide, as it explains how to create a
[Gruntfile][] as well as install and use Grunt plugins. Once you're
familiar with that process, you may install this plugin with this
command:

```shell
npm install grunt-peg --save-dev
```

One the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-peg');
```

The "peg" task
--------------

### Overview

In your project's Gruntfile, add a section named `peg` to the data
object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  peg: {
    your_target: {
      // Target-specific options go here.
    },
  },
})
```

### Options

#### target.grammar

Type: `String`

Location of the [PEG][] grammar definition.

#### target.outputFile

Type: `String`

The destination of the generated parser.

#### target.exportVar

Type: `String`
Default value: 'module.exports'

The variable used to assign the generated parser to.

### target.options

Type: `Object`
Default value : `{ cache : false, trackLineAndColumn : false }`

### Usage Examples

#### Default Options

In this example a [PEG][] grammer as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`. The default export variable is used,
i.e. `module.exports`.

```js
grunt.initConfig({
  peg: {
    example : {
      grammar: "grammar/example.peg",
      outputFile: "grammar/example.js"
    }
  }
})
```

#### Custom Options

In this example a [PEG][] grammer as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`, the export variable being `Example.parser`.

```js
grunt.initConfig({
  peg: {
    example : {
      grammar: "grammar/example.peg",
      exportVar: "Example.parser",
      outputFile: "grammar/example.js"
    }
  }
})
```

#### Passing Options to PEG

In this example a [PEG][] grammer as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`, the export variable being `Example.parser`.

```js
grunt.initConfig({
  peg: {
    example : {
      grammar: "grammar/example.peg",
      exportVar: "Example.parser",
      options: { cache : true }
    }
  }
})
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing
coding style. Add unit tests for any new or changed
functionality. Lint and test your code using
[Grunt](http://gruntjs.com/).

Release History
---------------

* Migrated to Grunt ~0.4.x

[Grunt]: http://gruntjs.com/
[Getting Started]: http://gruntjs.com/getting-started
[PEG]: https://npmjs.org/package/pegjs
[Gruntfile]: http://gruntjs.com/sample-gruntfile