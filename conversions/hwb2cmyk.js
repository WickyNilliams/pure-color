// TODO: test
var hwb2rgb = require("./hwb2rgb");
var rgb2cmyk = require("./rgb2cmyk");
var compose = require("../util/compose");

module.exports = compose(rgb2cmyk, hwb2rgb);