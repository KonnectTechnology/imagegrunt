import { modifyImage } from "./transform.ts";
import { parseParams } from "./params.ts";
import { getRemoteImage } from "./fetcher.ts";
import { storeImage } from "./store.ts";
import { databaseSetImage } from "./database.ts";
import { PmeImage } from "./pmeimage.ts";

import { UserAgent } from "jsr:@std/http/user-agent";

export default {
  async fetch(req: Request) {
    const reqURL = new URL(req.url);
    const params = parseParams(reqURL);
    if (typeof params === "string") {
      return new Response(params, { status: 400 });
    }
    const remoteImage = await getRemoteImage(params.image);
    if (typeof remoteImage === "string") {
      console.log("remoteImage string" + remoteImage);
      return new Response(remoteImage, { status: 400 });
    }

    const modifiedImage = await modifyImage(remoteImage.buffer, params);
    const newimgurl = await storeImage(modifiedImage, params.width);

    //const pmeimage = new PmeImage(params.uniqueid);
    let uniqueid = "asd-adsaqw-qweqwasd-asd1";
    const mykv = await databaseSetImage(
      uniqueid,
      params.image,
      newimgurl,
      "blah"
    );

    return new Response("<html>" + newimgurl + "</html>", {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
};
