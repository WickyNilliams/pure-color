var lab2xyz = require("./lab2xyz");
var lch2lab = require("./lch2lab");
var compose = require("../util/compose");

module.exports = compose(lab2xyz, lch2lab);