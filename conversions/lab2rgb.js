var xyz2rgb = require("./xyz2rgb");
var lab2xyz = require("./lab2xyz");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(xyz2rgb.raw, lab2xyz.raw);

module.exports = compose(round, raw);
module.exports.raw = raw;