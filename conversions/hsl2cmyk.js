var rgb2cmyk = require("./rgb2cmyk");
var hsl2rgb = require("./hsl2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2cmyk, hsl2rgb);