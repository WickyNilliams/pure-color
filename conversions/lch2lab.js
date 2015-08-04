var compose = require("../util/compose");
var round = require("../util/round");

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

module.exports = compose(round, lch2lab);
module.exports.raw = lch2lab;