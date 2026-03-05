import { clamp } from "../util/clamp.js";

/** @typedef {import("../types.js").RGB} RGB */

/**
 * @param {number} c
 * @returns {string}
 */
function componentToHex(c) {
  var value = Math.round(clamp(c, 0, 255));
  var hex   = value.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

/**
 * @param {RGB} rgb
 * @returns {string}
 */
export function rgb2hex(rgb) {
  var alpha = rgb.length === 4 ? componentToHex(/** @type {number} */ (rgb[3]) * 255) : "";

  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]) + alpha;
}
