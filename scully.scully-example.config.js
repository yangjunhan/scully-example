const { NewsPlugin } = require("./plugins/newsPlugin");
const { ColorPlugin } = require("./plugins/colorPlugin");

exports.config = {
  projectRoot: "./src",
  projectName: "scully-example",
  outDir: "./dist/static",
  routes: {
    "/news/:id": {
      type: NewsPlugin,
      url: "http://my-json-server.typicode.com/yangjunhan/demo/news",
      postRenderers: [ColorPlugin],
    },
  },
};
