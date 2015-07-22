var xyz2rgb = require("./xyz2rgb");
var lab2xyz = require("./lab2xyz");
var compose = require("../util/compose");

module.exports = compose(xyz2rgb, lab2xyz);