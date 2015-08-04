var rgb2hsl = require("./rgb2hsl");
var hwb2rgb = require("./hwb2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hsl, hwb2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;