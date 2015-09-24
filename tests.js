var assert = require('assert');
var ISFUNCTION = require('formula-isfunction');

describe('TEXT()', function() {
  var TEXT = require('./TEXT');
  
  it('it should be there when you require it', function () {
    assert( ISFUNCTION(TEXT), "TEXT is not a function");
  });

  it('it should calculate reasonable values', function() {
    assert( TEXT(1.2345, "#.##") === "1.23", "Should be 1.23");
    assert( TEXT(42300, "yyyy") === "2015", "Should be 2015");
    // FIXME: Add a 100 or more variations!
  });
  
});
