var rgb2hwb = require("./rgb2hwb");
var hsl2rgb = require("./hsl2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hwb, hsl2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;