/**
 * @param {number[]} rgb
 * @returns {string}
 */
export function rgb2string(rgb) {
  var scheme = "rgb";

  if(rgb.length === 4) {
    scheme += "a";
  }

  var parts = rgb.slice();
  parts[0] = Math.round(rgb[0]);
  parts[1] = Math.round(rgb[1]);
  parts[2] = Math.round(rgb[2]);

  return `${scheme}(${parts.join(",")})`;
}
