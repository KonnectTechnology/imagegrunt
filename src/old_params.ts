export function parseParams(reqUrl: URL) {
  const modeinput = reqUrl.searchParams.get("mode") || "resize";
  const image = reqUrl.searchParams.get("image");

  if (image == null) {
    return "Missing 'image' query parameter.";
  }
  const height = Number(reqUrl.searchParams.get("height")) || 0;
  const width = Number(reqUrl.searchParams.get("width")) || 0;
  if (height === 0 && width === 0) {
    return "Missing non-zero 'height' or 'width' query parameter.";
  }
  if (height < 0 || width < 0) {
    return "Negative height or width is not supported.";
  }
  const maxDimension = 2048;
  if (height > maxDimension || width > maxDimension) {
    return `Width and height cannot exceed ${maxDimension}.`;
  }

  let mode: "resize" | "crop";
  if (reqUrl.searchParams.get("mode") === "crop") {
    mode = "crop";
  } else {
    mode = "resize";
  }
  if (mode !== "resize" && mode !== "crop") {
    return "Mode not accepted: please use 'resize' or 'crop'.";
  }
  return {
    image,
    width,
    height,
    mode,
  };
}
