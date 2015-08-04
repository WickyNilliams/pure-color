var rgb2hsl = require("./rgb2hsl");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hsl.raw, cmyk2rgb.raw);

module.exports = compose(round, raw);
module.exports.raw = raw;