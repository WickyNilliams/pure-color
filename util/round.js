function round(values) {
  // yes we're mutating, but intermediary values are never exposed
  // and we avoid an extra array assignment like this
  for (var i = values.length - 1; i >= 0; i--) {
    values[i] = Math.round(values[i]);
  }

  return values;
}

module.exports = round;