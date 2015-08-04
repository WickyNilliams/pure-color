var rgb2hwb = require("./rgb2hwb");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(rgb2hwb, cmyk2rgb);

module.exports = compose(round, raw);
module.exports.raw = raw;