import { describe, it } from "node:test";
import assert from "node:assert";
import fixtures from "./fixtures/parse.json" with { type: "json" };
import { rgb } from "../parse/rgb.js";
import { hex } from "../parse/hex.js";
import { hsl } from "../parse/hsl.js";
import { parse } from "../parse/parse.js";

var parsers = {
  rgb,
  hex,
  hsl,
  parse
};

for (var space in parsers) {
  describe(`parse ${space}`, function() {
    var parser = parsers[space];
    fixtures[space].forEach(function(color) {
      it(`${JSON.stringify(color[0])} -> ${JSON.stringify(color[1])}`, function() {
        assert.deepStrictEqual(parser(color[0]), color[1]);
      });
    });
  });
}
