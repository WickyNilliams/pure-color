import { describe, it } from "node:test";
import assert from "node:assert";
import fixtures from "./fixtures/convert.json" with { type: "json" };
import { cmyk2rgb } from "../convert/cmyk2rgb.js";
import { hsl2hsv } from "../convert/hsl2hsv.js";
import { hsl2rgb } from "../convert/hsl2rgb.js";
import { hsl2string } from "../convert/hsl2string.js";
import { hsv2hsl } from "../convert/hsv2hsl.js";
import { hsv2rgb } from "../convert/hsv2rgb.js";
import { hwb2rgb } from "../convert/hwb2rgb.js";
import { lab2lch } from "../convert/lab2lch.js";
import { lab2xyz } from "../convert/lab2xyz.js";
import { lch2lab } from "../convert/lch2lab.js";
import { rgb2cmyk } from "../convert/rgb2cmyk.js";
import { rgb2hex } from "../convert/rgb2hex.js";
import { rgb2hsl } from "../convert/rgb2hsl.js";
import { rgb2hsv } from "../convert/rgb2hsv.js";
import { rgb2hwb } from "../convert/rgb2hwb.js";
import { rgb2lab } from "../convert/rgb2lab.js";
import { rgb2xyz } from "../convert/rgb2xyz.js";
import { rgb2grayscale } from "../convert/rgb2grayscale.js";
import { rgb2string } from "../convert/rgb2string.js";
import { xyz2rgb } from "../convert/xyz2rgb.js";
import { xyz2lab } from "../convert/xyz2lab.js";

var conversions = {
  cmyk: { rgb: cmyk2rgb },
  hsl: { rgb: hsl2rgb, hsv: hsl2hsv, string: hsl2string },
  hsv: { hsl: hsv2hsl, rgb: hsv2rgb },
  hwb: { rgb: hwb2rgb },
  lab: { lch: lab2lch, xyz: lab2xyz },
  lch: { lab: lch2lab },
  rgb: { cmyk: rgb2cmyk, hex: rgb2hex, hsl: rgb2hsl, hsv: rgb2hsv, hwb: rgb2hwb, lab: rgb2lab, xyz: rgb2xyz, grayscale: rgb2grayscale, string: rgb2string },
  xyz: { rgb: xyz2rgb, lab: xyz2lab },
};

function round(arr) {
  return arr.map(Math.round)
}

function equal(actual, expected) {
  if (!Array.isArray(expected)) {
    assert.strictEqual(actual, expected);
  } else {
    assert.deepStrictEqual(round(actual), expected);
  }
}

// dynamically create tests for hwb...
for(var angle = 0; angle <= 360; angle ++) {
  // all extreme values should give black, white or grey
  fixtures.hwb.rgb.push([[angle, 0, 100], [0, 0, 0]]);
  fixtures.hwb.rgb.push([[angle, 100, 0], [255, 255, 255]]);
  fixtures.hwb.rgb.push([[angle, 100, 100], [128, 128, 128]]);
}

for (var from in fixtures) {
  for (var to in fixtures[from]) {
    describe(`${from}2${to}`, function() {
      var conversion = conversions[from][to];
      fixtures[from][to].forEach(function(color) {
        it(`${JSON.stringify(color[0])} -> ${JSON.stringify(color[1])}`, function() {
          equal(conversion(color[0]), color[1]);
        });
      });
    });
  }
}
