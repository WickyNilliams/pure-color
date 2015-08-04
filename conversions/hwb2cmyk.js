// TODO: test
var hwb2rgb = require("./hwb2rgb");
var rgb2cmyk = require("./rgb2cmyk");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2cmyk, hwb2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;