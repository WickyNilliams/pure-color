var convert = require("../index");
var assert = require("assert");

assert.deepEqual(convert.rgb2hsl([140, 200, 100]), [96, 48, 59]);
assert.deepEqual(convert.rgb2hsv([140, 200, 100]), [96, 50, 78]);
assert.deepEqual(convert.rgb2hwb([140, 200, 100]), [96, 39, 22]);
assert.deepEqual(convert.rgb2cmyk([140, 200, 100]), [30, 0, 50, 22]);
assert.deepEqual(convert.rgb2cmyk([0,0,0,1]), [0,0,0,100]);
assert.deepEqual(convert.rgb2xyz([92, 191, 84]), [25, 40, 15]);
assert.deepEqual(convert.rgb2lab([92, 191, 84]), [70, -50, 45]);
assert.deepEqual(convert.rgb2lch([92, 191, 84]), [70, 67, 138]);

assert.deepEqual(convert.hsl2rgb([96, 48, 59]), [140, 201, 100]);
assert.deepEqual(convert.hsl2hsv([96, 48, 59]), [96, 50, 79]); // colorpicker says [96,50,79]
assert.deepEqual(convert.hsl2hwb([96, 48, 59]), [96, 39, 21]); // computer round to 21, should be 22
assert.deepEqual(convert.hsl2cmyk([96, 48, 59]), [30, 0, 50, 21]);

assert.deepEqual(convert.hsv2rgb([96, 50, 78]), [139, 199, 99]);
assert.deepEqual(convert.hsv2hsl([96, 50, 78]), [96, 47, 59]);
assert.deepEqual(convert.hsv2hsl([0,0,0]), [0,0,0]);
assert.deepEqual(convert.hsv2hwb([96, 50, 78]), [96, 39, 22]);
assert.deepEqual(convert.hsv2cmyk([96, 50, 78]), [30, 0, 50, 22]);

assert.deepEqual(convert.cmyk2rgb([30, 0, 50, 22]), [139, 199, 99]);
assert.deepEqual(convert.cmyk2hsl([30, 0, 50, 22]), [96, 47, 59]);
assert.deepEqual(convert.cmyk2hsv([30, 0, 50, 22]), [96, 50, 78]);
assert.deepEqual(convert.cmyk2hwb([30, 0, 50, 22]), [96, 39, 22]);


assert.deepEqual(convert.xyz2rgb([25, 40, 15]), [97, 190, 85]);
assert.deepEqual(convert.xyz2rgb([50, 100, 100]), [0, 255, 241]);
assert.deepEqual(convert.xyz2lab([25, 40, 15]), [69, -48, 44]);
assert.deepEqual(convert.xyz2lch([25, 40, 15]), [69, 65, 137]);

assert.deepEqual(convert.lab2xyz([69, -48, 44]), [25, 39, 15]);
assert.deepEqual(convert.lab2rgb([75, 20, -30]), [194, 175, 240]);
assert.deepEqual(convert.lab2lch([69, -48, 44]), [69, 65, 137]);

assert.deepEqual(convert.lch2lab([69, 65, 137]), [69, -48, 44]);
assert.deepEqual(convert.lch2xyz([69, 65, 137]), [25, 39, 15]);
assert.deepEqual(convert.lch2rgb([69, 65, 137]), [98, 188, 83]);


// hwb
// http://dev.w3.org/csswg/css-color/#hwb-examples

// all extreme value should give black, white or grey
for(var angle = 0; angle <= 360; angle ++) {
  assert.deepEqual(convert.hwb2rgb([angle, 0, 100]), [0, 0, 0]);
  assert.deepEqual(convert.hwb2rgb([angle, 100, 0]), [255, 255, 255]);
  assert.deepEqual(convert.hwb2rgb([angle, 100, 100]), [128, 128, 128]);
}

assert.deepEqual(convert.hwb2rgb([0, 0, 0]), [255,0,0]);
assert.deepEqual(convert.hwb2rgb([0, 20, 40]), [153, 51, 51]);
assert.deepEqual(convert.hwb2rgb([0, 40, 40]), [153, 102, 102]);
assert.deepEqual(convert.hwb2rgb([0, 40, 20]), [204, 102, 102]);

assert.deepEqual(convert.hwb2rgb([120, 0, 0]), [0,255,0]);
assert.deepEqual(convert.hwb2rgb([120, 20, 40]), [51, 153, 51]);
assert.deepEqual(convert.hwb2rgb([120, 40, 40]), [102, 153, 102]);
assert.deepEqual(convert.hwb2rgb([120, 40, 20]), [102, 204, 102]);

assert.deepEqual(convert.hwb2rgb([240, 0, 0]), [0,0,255]);
assert.deepEqual(convert.hwb2rgb([240, 20, 40]), [51, 51, 153]);
assert.deepEqual(convert.hwb2rgb([240, 40, 40]), [102, 102, 153]);
assert.deepEqual(convert.hwb2rgb([240, 40, 20]), [102, 102, 204]);


// black should always stay black
val = [0, 0, 0];
assert.deepEqual(convert.hsl2hsv(val), val);
assert.deepEqual(convert.hsl2rgb(val), val);
assert.deepEqual(convert.hsl2hwb(val), [0, 0, 100]);
assert.deepEqual(convert.hsl2cmyk(val), [0, 0, 0, 100]);


// assert.deepEqual(convert.rgb2keyword([255, 228, 196]), "bisque");
// assert.deepEqual(convert.hsl2keyword([240, 100, 50]), "blue");
// assert.deepEqual(convert.hsv2keyword([240, 100, 100]), "blue");
// assert.deepEqual(convert.cmyk2keyword([100, 100, 0, 0]), "blue");
// assert.deepEqual(convert.keyword2rgb("blue"), [0, 0, 255]);
// assert.deepEqual(convert.keyword2hsl("blue"), [240, 100, 50]);
// assert.deepEqual(convert.keyword2hsv("blue"), [240, 100, 100]);
// assert.deepEqual(convert.keyword2hwb("blue"), [240, 0, 0]);
// assert.deepEqual(convert.keyword2cmyk("blue"), [100, 100, 0, 0]);
// assert.deepEqual(convert.keyword2lab("blue"), [32, 79, -108]);
// assert.deepEqual(convert.keyword2xyz("blue"), [18, 7, 95]);