var lab2xyz = require("./lab2xyz");
var lch2lab = require("./lch2lab");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(lab2xyz, lch2lab);

module.exports = compose(round, raw);
module.exports.raw = raw;