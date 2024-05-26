import * as uuid from "jsr:@std/uuid";
import { format } from "jsr:@std/datetime/format";

export async function storeImage(modifiedImage: Uint8Array, width: number) {
  /* Save new image to repo */
  const date = new Date();
  const datestamp = format(date, "yyyy-MM-dd-HHmmss");
  const newuuid = uuid.v1.generate();

  const newimgdir = "images/";
  const newimgslug = "konnect-" + newuuid + "-" + width + "w-" + ".jpg";
  const newimgstore = newimgdir + newimgslug;
  const newimgurl = "http://10.14.16.100/" + newimgdir + newimgslug;

  await Deno.writeFile(newimgstore, modifiedImage, { mode: 0o644 });
  return newimgurl;
}
