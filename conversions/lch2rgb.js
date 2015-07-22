var lab2rgb = require("./lab2rgb");
var lch2lab = require("./lch2lab");
var compose = require("../util/compose");

module.exports = compose(lab2rgb, lch2lab);