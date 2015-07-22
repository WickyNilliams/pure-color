var rgb2hsv = require("./rgb2hsv");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hsv, cmyk2rgb);