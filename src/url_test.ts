// url_test.ts
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("url test", () => {
  const url = new URL("./foo.js", "https://deno.land/");
  assertEquals(url.href, "https://deno.land/foo.js");
});
