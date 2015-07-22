var rgb2hwb = require("./rgb2hwb");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hwb, cmyk2rgb);