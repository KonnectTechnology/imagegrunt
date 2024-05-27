import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

import { PmeImage } from "./pmeimage.ts";

Deno.test("pmeimage test", () => {
  const pmeimage = new PmeImage(
    "123456789",
    "https://deno.land/foo.js",
    new Uint8Array(),
    0,
    0,
    0
  );

  assertEquals(pmeimage.origurl, "https://deno.land/foo.js");
});
