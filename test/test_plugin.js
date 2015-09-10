function pass(ast) {
  if (!ast.initializer) {
    ast.initializer = {
      type: 'initializer',
      code: 'console.log("test plugin loaded");'
    }
  }
}

module.exports = {
  use: function (config, options) {
    config.passes.transform.unshift(pass);
  }
};