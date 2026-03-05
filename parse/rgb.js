import { extractComponents } from "./extractComponents.js";
import { clamp } from "../util/clamp.js";

/** @typedef {import("../types.js").RGB} RGB */

/**
 * @param {string} component
 * @param {number} i
 * @returns {number}
 */
function parseRgbComponent(component, i) {
  if (i < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(255 * clamp(parseInt(component, 10), 0, 100)/100);
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    return clamp(parseFloat(component), 0, 1);
  } 
}

/**
 * @param {string} color
 * @returns {RGB}
 */
export function rgb(color) {
  return /** @type {RGB} */ (extractComponents(color).map(parseRgbComponent));
}
