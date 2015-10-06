var extractComponents = require("./extractComponents");
var clamp = require("../util/clamp");

// TODO: handle percentage values for rgb?

function parseRgbComponent(component, i) {
  return (i < 3) ? clamp(parseInt(component, 10), 0, 255) : clamp(parseFloat(component), 0, 1);
}

function rgb(color) {
  return extractComponents(color).map(parseRgbComponent);
}

module.exports = rgb;