import { hsl } from "./hsl.js";
import { hex } from "./hex.js";
import { rgb } from "./rgb.js";

/**
 * @typedef {{ space: "rgb", value: [number, number, number, number?] } | { space: "hsl", value: [number, number, number, number?] }} ParseResult
 */

var space2parser = {
  "#"   : { parser: hex, space: "rgb" },
  "hsl" : { parser: hsl, space: "hsl" },
  "rgb" : { parser: rgb, space: "rgb" }
};

/**
 * @param {string} color
 * @returns {ParseResult | undefined}
 */
export function parse(color) {
  for(var scheme in space2parser) {
    if(color.indexOf(scheme) === 0) {
      var entry = space2parser[scheme];
      return { space: entry.space, value: entry.parser(color) };
    }
  }
}
