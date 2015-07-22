var rgb2hwb = require("./rgb2hwb");
var hsl2rgb = require("./hsl2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hwb, hsl2rgb);