var rgb2hsv = require("./rgb2hsv");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hsv, cmyk2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;