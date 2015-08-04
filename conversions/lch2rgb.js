var lab2rgb = require("./lab2rgb");
var lch2lab = require("./lch2lab");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(lab2rgb.raw, lch2lab.raw);

module.exports = compose(round, raw);
module.exports.raw = raw;