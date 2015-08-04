var lab2lch = require("./lab2lch");
var xyz2lab = require("./xyz2lab");
var compose = require("../util/compose");
var round = require("../util/round");

var raw = compose(lab2lch, xyz2lab);

module.exports = compose(round, raw);
module.exports.raw = raw;