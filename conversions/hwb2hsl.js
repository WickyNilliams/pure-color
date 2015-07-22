var rgb2hsl = require("./rgb2hsl");
var hwb2rgb = require("./hwb2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hsl, hwb2rgb);