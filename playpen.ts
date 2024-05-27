/**
 * Playpen server
 *
 * @type {*}
 */
const server = Deno.serve((req, info) => {
  console.log(info);
  info.completed
    .then(() => {
      console.log("Response sent successfuly!");
    })
    .catch(() => {
      console.error("Failed sending the response.");
    });
  return new Response("Hello world");
});

const port = server.addr.port;
console.log(port);

Deno.serve(
  { port: 3000, hostname: "0.0.0.0" },
  (_req) => new Response("Hello, world")
);
