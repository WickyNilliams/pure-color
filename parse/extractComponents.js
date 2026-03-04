var component = /-?\d+(\.\d+)?%?/g;

/**
 * @param {string} color
 * @returns {RegExpMatchArray}
 */
function extractComponents(color) {
  return /** @type {RegExpMatchArray} */ (color.match(component));
}

export default extractComponents;