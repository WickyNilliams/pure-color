var { describe, it } = require("node:test");
var assert = require("node:assert");
var convert = require("../convert");
var fixtures = require("./fixtures/convert");

function round(arr) {
  return arr.map(Math.round)
}

function equal(actual, expected) {
  if (!Array.isArray(expected)) {
    assert.strictEqual(actual, expected);
  } else {
    assert.deepStrictEqual(round(actual), expected);
  }
}

// dynamically create tests for hwb...
for(var angle = 0; angle <= 360; angle ++) {
  // all extreme values should give black, white or grey
  fixtures.hwb.rgb.push([[angle, 0, 100], [0, 0, 0]]);
  fixtures.hwb.rgb.push([[angle, 100, 0], [255, 255, 255]]);
  fixtures.hwb.rgb.push([[angle, 100, 100], [128, 128, 128]]);
}

for (var from in fixtures) {
  for (var to in fixtures[from]) {
    describe(from + "2" + to, function() {
      var conversion = convert[from][to];
      fixtures[from][to].forEach(function(color) {
        it(JSON.stringify(color[0]) + " -> " + JSON.stringify(color[1]), function() {
          equal(conversion(color[0]), color[1]);
        });
      });
    });
  }
}
