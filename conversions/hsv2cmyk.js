var rgb2cmyk = require("./rgb2cmyk");
var hsv2rgb = require("./hsv2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2cmyk, hsv2rgb);