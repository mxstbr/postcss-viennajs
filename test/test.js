var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
  postcss([ plugin(opts) ]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
    expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });
};

describe('postcss-viennajs', function () {
  it('replaces viennajs: awesome; correctly', function (done) {
    test(
      'a{ viennajs: awesome; }',
      'a{ display: block; }',
      {}, done);
  });
  it('replaces viennajs: horrible; correctly', function (done) {
    test(
      'a{ viennajs: horrible; }',
      'a{ display: none; }',
      {}, done);
  });
  it('does not change other CSS rules', function (done) {
    test(
      'a{ height: 50px; display: flex; }',
      'a{ height: 50px; display: flex; }',
      {}, done);
  });
});

/* Write tests here

test('does something', t => {
    return run(t, 'a{ }', 'a{ }', { });
});

*/
