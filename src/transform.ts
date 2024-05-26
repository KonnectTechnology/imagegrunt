/* import {
  ImageMagick,
  initializeImageMagick,
  MagickGeometry,
} from "https://deno.land/x/imagemagick_deno@0.0.14/mod.ts";
*/

import {
  ImageMagick,
  IMagickImage,
  initialize,
  MagickFormat,
  MagickGeometry,
} from "https://deno.land/x/imagemagick_deno@0.0.26/mod.ts";

await initialize();

export function modifyImage(
  imageBuffer: Uint8Array,
  params: {
    image: string;
    width: number;
    height: number;
    mode: "resize" | "crop";
  }
) {
  const sizingData = new MagickGeometry(params.width, params.height);
  sizingData.ignoreAspectRatio = params.height > 0 && params.width > 0;
  return new Promise<Uint8Array>((resolve) => {
    ImageMagick.read(imageBuffer, (image) => {
      if (params.mode === "resize") {
        image.resize(sizingData);
      } else {
        image.crop(sizingData);
      }
      image.write((data) => resolve(data));
    });
  });
}
