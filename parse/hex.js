function hex(hex) {
  // # FFF || # FF FF FF
  if (hex.length % 3 === 1) {
    if (hex.length === 4) {
      hex = '#' + hex.charAt(1) + hex.charAt(1) +
        hex.charAt(2) + hex.charAt(2) +
        hex.charAt(3) + hex.charAt(3);
    }
    return [
      parseInt(hex.substring(1,3), 16),
      parseInt(hex.substring(3,5), 16),
      parseInt(hex.substring(5,7), 16)
    ];
  }
  // # FFFF || # FF FF FF FF
  else if (hex.length % 4 === 1) {
    if (hex.length === 5) {
      hex = '#' + hex.charAt(1) + hex.charAt(1) +
        hex.charAt(2) + hex.charAt(2) +
        hex.charAt(3) + hex.charAt(3) +
        hex.charAt(4) + hex.charAt(4);
    }
    return [
      parseInt(hex.substring(1,3), 16),
      parseInt(hex.substring(3,5), 16),
      parseInt(hex.substring(5,7), 16),
      parseFloat((parseInt(hex.substring(7,9), 16) / 255).toFixed(2))
    ];
  }
}

module.exports = hex;