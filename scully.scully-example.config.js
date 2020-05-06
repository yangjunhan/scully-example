const { NewsPlugin } = require("./plugins/newsPlugin");
const { ColorPlugin } = require("./plugins/colorPlugin");

exports.config = {
  projectRoot: "./src",
  projectName: "scully-example",
  outDir: "./dist/static",
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    "/news/:id": {
      type: NewsPlugin,
      url: "http://my-json-server.typicode.com/yangjunhan/demo/news",
      postRenderers: [ColorPlugin],
    },
  },
};
