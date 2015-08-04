var lab2lch = require("./lab2lch");
var rgb2lab = require("./rgb2lab");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(lab2lch.raw, rgb2lab.raw);

module.exports = compose(round, raw);
module.exports.raw = raw;