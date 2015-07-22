var conversions = require("./conversions");

function roundValue(value, i, values) {
  values[i] = Math.round(value);
}

function round(fn) {
  return function () {
    var results = fn.apply(null, arguments);
    results.forEach(roundValue);
    return results;
  };
}

for(var conversion in conversions) {
  module.exports[conversion] = round(conversions[conversion]);
}