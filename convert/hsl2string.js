/**
 * @param {[number, number, number, number?]} hsl
 * @returns {string}
 */
export function hsl2string(hsl) {
  var scheme = "hsl";

  if(hsl.length === 4) {
    scheme += "a";
  }

  /** @type {(number | string)[]} */
  var parts = hsl.slice();
  parts[0] = Math.round(hsl[0]);
  parts[1] = Math.round(hsl[1]) + "%";
  parts[2] = Math.round(hsl[2]) + "%";

  return `${scheme}(${parts.join(",")})`;
}
