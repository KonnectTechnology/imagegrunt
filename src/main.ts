import { serve } from "https://deno.land/std@0.173.0/http/server.ts";

import { modifyImage } from "./transform.ts";
import { parseParams } from "./params.ts";
import { getRemoteImage } from "./fetcher.ts";
import { storeImage } from "./store.ts";

serve(
  async (req: Request) => {
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

    /*return new Response(modifiedImage, {
      headers: {
        "Content-Type": remoteImage.mediaType,
      },
    }*/

    return new Response("<html>" + newimgurl + "</html>", {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  { port: 4242, hostname: "0.0.0.0" }
);
