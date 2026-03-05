import { extractComponents } from "./extractComponents.js";
import { clamp } from "../util/clamp.js";


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
 * @returns {[number, number, number, number?]}
 */
export function hsl(color) {
  return /** @type {[number, number, number, number?]} */ (extractComponents(color).map(parseHslComponent));
}
