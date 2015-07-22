var rgb2hsv = require("./rgb2hsv");
var hwb2rgb = require("./hwb2rgb");
var compose = require("../util/compose");

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

module.exports = compose(rgb2hsv, hwb2rgb);