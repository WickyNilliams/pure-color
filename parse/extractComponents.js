var component = /-?\d+(\.\d+)?%?/g;

/**
 * @param {string} color
 * @returns {RegExpMatchArray}
 */
export function extractComponents(color) {
  return /** @type {RegExpMatchArray} */ (color.match(component));
}

