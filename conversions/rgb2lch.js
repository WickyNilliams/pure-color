var lab2lch = require("./lab2lch");
var rgb2lab = require("./rgb2lab");
var compose = require("../util/compose");

module.exports = compose(lab2lch, rgb2lab);