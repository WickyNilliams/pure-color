var rgb2hwb = require("./rgb2hwb");
var hsv2rgb = require("./hsv2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hwb, hsv2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;