var rgb2hsl = require("./rgb2hsl");
var cmyk2rgb = require("./cmyk2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hsl, cmyk2rgb);