var rgb2hwb = require("./rgb2hwb");
var hsv2rgb = require("./hsv2rgb");
var compose = require("../util/compose");

module.exports = compose(rgb2hwb, hsv2rgb);