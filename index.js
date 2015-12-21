var postcss = require('postcss');

module.exports = postcss.plugin('postcss-viennajs', function (opts) {
  opts = opts || {};

  return function(css) {
    css.walkDecls(function(decl) {
      if (decl.prop.match(/^viennajs$/)) {
        if (decl.value === "awesome") {
          decl.replaceWith("display: block;");
        } else if (decl.value === "horrible") {
          decl.replaceWith("display: none;");
        }
      }
    });
  };
});
