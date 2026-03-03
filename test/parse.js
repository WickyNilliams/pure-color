var { describe, it } = require("node:test");
var assert = require("node:assert");
var fixtures = require("./fixtures/parse");

var parsers = {
  rgb   : require("../parse/rgb"),
  hex   : require("../parse/hex"),
  hsl   : require("../parse/hsl"),
  parse : require("../parse")
};

for (var space in parsers) {
  describe("parse " + space, function() {
    var parser = parsers[space];
    fixtures[space].forEach(function(color) {
      it(JSON.stringify(color[0]) + " -> " + JSON.stringify(color[1]), function() {
        assert.deepStrictEqual(parser(color[0]), color[1]);
      });
    });
  });
}
