import { hsl } from "./hsl.js";
import { hex } from "./hex.js";
import { rgb } from "./rgb.js";
import { hsl2rgb } from "../convert/hsl2rgb.js";


/**
 * @param {string} color
 * @returns {[number, number, number, number?]}
 */
function hsl2rgbParse(color) {
  var h = hsl(color);
  var r = hsl2rgb(h);

  // handle alpha since hsl2rgb doesn't know (or care!) about it
  if(h.length === 4) {
    r.push(/** @type {number} */ (h[3]));
  }

  return r;
}

var space2parser = {
  "#" : hex,
  "hsl" : hsl2rgbParse,
  "rgb" : rgb
};

/**
 * @param {string} color
 * @returns {[number, number, number, number?] | undefined}
 */
export function parse(color) {
  for(var scheme in space2parser) {
    if(color.indexOf(scheme) === 0) {
      return space2parser[scheme](color);
    }
  }
}
