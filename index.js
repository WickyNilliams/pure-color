function round(fn) {
  return function () {
    var results = fn.apply(null, arguments);
    return results.map(function(result) {
      return Math.round(result);
    });
  };
}

module.exports = {
  rgb2hsl  : round(require("./conversions/rgb2hsl")),
  rgb2hsv  : round(require("./conversions/rgb2hsv")),
  rgb2hwb  : round(require("./conversions/rgb2hwb")),
  rgb2cmyk : round(require("./conversions/rgb2cmyk")),
  rgb2xyz  : round(require("./conversions/rgb2xyz")),
  rgb2lab  : round(require("./conversions/rgb2lab")),
  rgb2lch  : round(require("./conversions/rgb2lch")),

  hsl2rgb  : round(require("./conversions/hsl2rgb")),
  hsl2hsv  : round(require("./conversions/hsl2hsv")),
  hsl2hwb  : round(require("./conversions/hsl2hwb")),
  hsl2cmyk : round(require("./conversions/hsl2cmyk")),

  hsv2rgb  : round(require("./conversions/hsv2rgb")),
  hsv2hsl  : round(require("./conversions/hsv2hsl")),
  hsv2hwb  : round(require("./conversions/hsv2hwb")),
  hsv2cmyk : round(require("./conversions/hsv2cmyk")),

  hwb2rgb  : round(require("./conversions/hwb2rgb")),
  hwb2hsl  : round(require("./conversions/hwb2hsl")),
  hwb2hsv  : round(require("./conversions/hwb2hsv")),
  hwb2cmyk : round(require("./conversions/hwb2cmyk")),

  cmyk2rgb : round(require("./conversions/cmyk2rgb")),
  cmyk2hsl : round(require("./conversions/cmyk2hsl")),
  cmyk2hsv : round(require("./conversions/cmyk2hsv")),
  cmyk2hwb : round(require("./conversions/cmyk2hwb")),


  xyz2rgb  : round(require("./conversions/xyz2rgb")),
  xyz2lab  : round(require("./conversions/xyz2lab")),
  xyz2lch  : round(require("./conversions/xyz2lch")),

  lab2xyz  : round(require("./conversions/lab2xyz")),
  lab2rgb  : round(require("./conversions/lab2rgb")),
  lab2lch  : round(require("./conversions/lab2lch")),

  lch2lab  : round(require("./conversions/lch2lab")),
  lch2xyz  : round(require("./conversions/lch2xyz")),
  lch2rgb  : round(require("./conversions/lch2rgb")),

  // rgb2keyword: rgb2keyword,
  // hsl2keyword: hsl2keyword,
  // hsv2keyword: hsv2keyword,
  // hwb2keyword: hwb2keyword,
  // cmyk2keyword: cmyk2keyword,
  // keyword2rgb: keyword2rgb,
  // keyword2hsl: keyword2hsl,
  // keyword2hsv: keyword2hsv,
  // keyword2hwb: keyword2hwb,
  // keyword2cmyk: keyword2cmyk,
  // keyword2lab: keyword2lab,
  // keyword2xyz: keyword2xyz
}