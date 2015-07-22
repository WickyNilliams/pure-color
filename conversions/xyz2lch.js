var lab2lch = require("./lab2lch");
var xyz2lab = require("./xyz2lab");
var compose = require("../util/compose");

module.exports = compose(lab2lch, xyz2lab);