var rgb2hsv = require("./rgb2hsv");
var hwb2rgb = require("./hwb2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hsv, hwb2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;