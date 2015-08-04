module.exports = {
  rgb2hsl  : require("./conversions/rgb2hsl"),
  rgb2hsv  : require("./conversions/rgb2hsv"),
  rgb2hwb  : require("./conversions/rgb2hwb"),
  rgb2cmyk : require("./conversions/rgb2cmyk"),
  rgb2xyz  : require("./conversions/rgb2xyz"),
  rgb2lab  : require("./conversions/rgb2lab"),
  rgb2lch  : require("./conversions/rgb2lch"),
  rgb2hex  : require("./conversions/rgb2hex"),

  hsl2rgb  : require("./conversions/hsl2rgb"),
  hsl2hsv  : require("./conversions/hsl2hsv"),
  hsl2hwb  : require("./conversions/hsl2hwb"),
  hsl2cmyk : require("./conversions/hsl2cmyk"),

  hsv2rgb  : require("./conversions/hsv2rgb"),
  hsv2hsl  : require("./conversions/hsv2hsl"),
  hsv2hwb  : require("./conversions/hsv2hwb"),
  hsv2cmyk : require("./conversions/hsv2cmyk"),

  hwb2rgb  : require("./conversions/hwb2rgb"),
  hwb2hsl  : require("./conversions/hwb2hsl"),
  hwb2hsv  : require("./conversions/hwb2hsv"),
  hwb2cmyk : require("./conversions/hwb2cmyk"),

  cmyk2rgb : require("./conversions/cmyk2rgb"),
  cmyk2hsl : require("./conversions/cmyk2hsl"),
  cmyk2hsv : require("./conversions/cmyk2hsv"),
  cmyk2hwb : require("./conversions/cmyk2hwb"),


  xyz2rgb  : require("./conversions/xyz2rgb"),
  xyz2lab  : require("./conversions/xyz2lab"),
  xyz2lch  : require("./conversions/xyz2lch"),

  lab2xyz  : require("./conversions/lab2xyz"),
  lab2rgb  : require("./conversions/lab2rgb"),
  lab2lch  : require("./conversions/lab2lch"),

  lch2lab  : require("./conversions/lch2lab"),
  lch2xyz  : require("./conversions/lch2xyz"),
  lch2rgb  : require("./conversions/lch2rgb"),

  hex2rgb  : require("./conversions/hex2rgb")

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
};