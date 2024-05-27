import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";



export async function databaseSetImage(
  uniqueid: string,
  origurl: string,
  newurl: string,
  newslug: string
) {
  const env = await load();
  const token = env["DENO_KV_ACCESS_TOKEN"];
  console.log(token);

  Deno.env.set("DENO_KV_ACCESS_TOKEN", token);

  //const kv = await Deno.openKv();
  const kv = await Deno.openKv(
    "https://api.deno.com/databases/0bed469e-5c92-47a3-b447-f95b78076c35/connect"
  );

  const kvrecord = {
    uniqueid: uniqueid,
    origurl: origurl,
    newurl: newurl,
    newslug: newslug,
  };

  const result = await kv.set([uniqueid, origurl], kvrecord);

  return true;
}
