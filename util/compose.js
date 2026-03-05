/**
 * @template A, B, C
 * @param {(input: B) => C} a
 * @param {(input: A) => B} b
 * @returns {(input: A) => C}
 */
export function compose(a, b) {
  return function(arg) {
    return a(b(arg));
  };
}

