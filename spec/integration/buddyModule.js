var expect   = require('expect.js');
var path     = require('path');
var dirmap   = require('dirmap');
var fixtures = dirmap(path.resolve(__dirname, '../fixtures'), true);
var fs       = require('fs');
var exec     = require('child_process').exec;
var Buddy    = require('../../index.js');

describe('index.js', function() {
  it('correctly returns all magic numbers in the test file', function(done) {
    var buddy = new Buddy(
      [ fixtures.testFile ],
      {
        detectObjects: true,
        enforceConst: true,
        ignore: []
      }
    );

    buddy.run().then(function(report) {
      expect(report.length).to.be(9);

      done();
    });
  });
});
