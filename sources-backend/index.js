import path from "path";
import Hapi from "@hapi/hapi";
import inert from "@hapi/inert";
import App from "sources-common/components/App.svelte";

(async () => {
  const server = Hapi.server({
    port: 8000,
    host: "localhost"
  });

  await server.register(inert);

  server.route([{
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, "www")
      }
    }
  }, {
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      const { html } = App.render();

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Svelte TODO</title>
          <link rel="stylesheet" href="/builds/main.css">
        </head>
        <body>
          ${html}
          <script defer src="/builds/main.js"></script>
        </body>
        </html>
      `;
    }
  }]);

  await server.start();
  console.log(`Server is ready to rock on port ${server.info.uri}`);
})();
