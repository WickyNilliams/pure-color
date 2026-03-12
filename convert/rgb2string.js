/**
 * @param {number[]} rgb
 * @returns {string}
 */
export function rgb2string(rgb) {
  const [r, g, b, a] = rgb;
  if (a !== undefined) {
    return `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a})`;
  }
  return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}
