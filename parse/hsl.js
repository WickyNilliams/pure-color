var extractComponents = require("./extractComponents");
var clamp = require("../util/clamp");

/**
 * @param {string} component
 * @param {number} i
 * @returns {number}
 */
function parseHslComponent(component, i) {
  var value = parseFloat(component);

  switch(i) {
    case 0:
      return clamp(value, 0, 360);
    case 1:
    case 2:
      return clamp(value, 0, 100);
    case 3:
      return clamp(value, 0, 1);
    default:
      return value;
  }
}

/**
 * @param {string} color
 * @returns {number[]}
 */
function hsl(color) {
  return extractComponents(color).map(parseHslComponent);
}

module.exports = hsl;