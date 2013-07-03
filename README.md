# grunt-peg

> A grunt multi task that generates parsers from PEG grammars.

## Getting Started
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

## The "peg" task
_Run this task with the `grunt peg` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

Any specified option will be passed through directly to [PEG.js][], thus you can specify any option that PEG.js supports. See the [PEG.js documentation][] for a list of supported options.

[PEG.js]: http://pegjs.majda.cz/
[PEG.js documentation]: http://pegjs.majda.cz/documentation

An additional option is supported:

#### exportVar
Type: `String`
Default value: 'module.exports'

The variable to which the generated parser will be assigned in the output file.

### Usage Examples

#### Default Options

In this example a [PEG][] grammar as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`. The default export variable is used,
i.e. `module.exports`.

```js
grunt.initConfig({
  peg: {
    example: {
      src: "grammar/example.peg",
      dest: "grammar/example.js"
    }
  }
})
```

#### Custom Options

In this example a [PEG][] grammar as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`, the export variable being `Example.parser`.

```js
grunt.initConfig({
  peg: {
    example : {
      src: "grammar/example.peg",
      dest: "grammar/example.js",
      options: { exportVar: "Example.parser" }
    }
  }
})
```

#### Passing Options to PEG

In this example a [PEG][] grammar as described in the file
`grammar/example.peg` is used to generate parser
`grammar/example.js`, the export variable being `Example.parser`.
Both the task-specific `trackLineAndColumn` and target-specific
`cache` options will be passed through to PEG.js.

```js
grunt.initConfig({
  peg: {
    options: { trackLineAndColumn: true },
    example : {
      src: "grammar/example.peg",
      dest: "grammar/example.js",
      options: {
        exportVar: "Example.parser",
        cache: true
      }
    }
  }
})
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing
coding style. Add unit tests for any new or changed
functionality. Lint and test your code using
[Grunt](http://gruntjs.com/).

## Release History

* 2013-06-02   v0.2.0   Pass options to PEG.js
* 2013-04-23   v0.1.0   Migrated to Grunt ~0.4.x

[Grunt]: http://gruntjs.com/
[Getting Started]: http://gruntjs.com/getting-started
[PEG]: https://npmjs.org/package/pegjs
[Gruntfile]: http://gruntjs.com/sample-gruntfile