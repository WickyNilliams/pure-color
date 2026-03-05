# pure-color

[![Build Status](https://travis-ci.org/WickyNilliams/pure-color.svg)](https://travis-ci.org/WickyNilliams/pure-color)

`pure-color` is a color conversion and parsing library for the browser and node. It offers conversions between `rgb`, `hsl`, `hsv`, `hwb`, `cmyk`, `xyz`, `lab`, `lch`, `hex`. It offers parsing of `rgb(a)`, `hex` and `hsl(a)` strings.

## Installation

Install with npm:

```bash
npm install pure-color --save
```

## Structure

The library is structured to allow importing of just the functions you need.

```js
// import individual conversion function
import { rgb2hsl } from "pure-color/convert/rgb2hsl";

// import individual parse function
import { rgb as parseRgb } from "pure-color/parse/rgb";

// import the generic parser (auto-detects format)
import { parse } from "pure-color/parse/parse";
```

## API

### Conversion

The majority of conversion functions have the signature `number[] => number[]`. The exceptions are `rgb2string` and `rgb2hex`, whose signature is `number[] => string`.

You can see all available conversions in the [`convert` directory](convert).

```js
import { rgb2hsl } from "pure-color/convert/rgb2hsl";
import { rgb2hex } from "pure-color/convert/rgb2hex";

rgb2hsl([255, 0, 0]); // [0, 100, 50]
rgb2hex([255, 0, 0]); // "#ff0000"
```

#### Notes

##### Alpha values

The conversion functions make no effort to handle alpha values. For instance:

```js
// alpha value is lost in conversion
rgb2hsl([255, 0, 0, 0.5]); // [0, 100, 50]
```

The reason for this is two-fold:

1. Alpha value is orthogonal to color. A color with 50% opacity, is still the same color if it had 100% opacity.
2. It is not clear how alpha values should be handled in some color spaces. For instance, does alpha make sense in CMYK space?

You must make effort to preserve alpha values between conversions yourself if this is important to you.

##### Missing conversions

Any conversions that are simple compositions of other conversions have been omitted.

For example, let's imagine we wanted to convert `hsl` to `cmyk`. This function doesn't exist, but it can be trivially created by composing `hsl2rgb` and `rgb2cmyk`:

```js
import { hsl2rgb } from "pure-color/convert/hsl2rgb";
import { rgb2cmyk } from "pure-color/convert/rgb2cmyk";

// define a new function composing the others
function hsl2cmyk(hsl) {
  return rgb2cmyk(hsl2rgb(hsl));
}

// or use a higher-order compose function
const hsl2cmyk = compose(rgb2cmyk, hsl2rgb);
```

If there are missing conversions that cannot be achieved through composition, please raise an issue.

### Parsing

Parse functions have signature `string => number[]`.

A generic parsing function is available, which accepts `hsl`, `rgb`, and `hex` string formats. This always converts to `rgb` space for consistency - if you don't know what format the color is to begin with, you don't know what color space will be returned.

```js
import { parse } from "pure-color/parse/parse";

// parse auto-detects format and converts hsl/rgb/hex string to `[r, g, b, a]`
parse("rgb(0, 0, 0)");     // [0, 0, 0]
parse("hsl(0, 0, 0)");     // [0, 0, 0]
parse("#000000");           // [0, 0, 0]

// it also handles alpha
parse("rgba(0, 0, 0, 1)"); // [0, 0, 0, 1]
parse("hsla(0, 0, 0, 1)"); // [0, 0, 0]
```

Individual parsing functions are available if you know what format you will be parsing. Note that the `hsl` parse function returns an `hsl` array, whereas `rgb` and `hex` return an `rgb` array

```js
import { hsl } from "pure-color/parse/hsl";

hsl("hsla(0, 0, 0, 1)"); // [0, 0, 0, 1]
```

## Dependencies

No dependencies. Uses ES modules natively.

## Motivation

I have tried many color conversion/parsing libraries and I was not satisfied with any of them.

* They're often wrapped up in awkward object-oriented APIs
* They require that you include the entire library, when you often only want a subset of functionality

This library attempts to correct that by:

* Offering pure functions with consistent signatures
* Offer the bare minimum necessary functions
* Allow requiring of only the functions you need, reducing file size

## Contributions & Issues

_Contributions are welcome from **everyone**_.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce. Personal help requests filed as issues will be declined.

Please clearly explain the purpose of any pull request. In lieu of a formal style guide, please follow the current coding style. Tests would be nice, but are not essential.

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)