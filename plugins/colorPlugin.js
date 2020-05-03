const { registerPlugin } = require("@scullyio/scully");

const ColorPlugin = "color";

const colorPlugin = async (html, route) => {
  const splitter = "</head>";
  const [begin, end] = html.split(splitter);
  const colorStyle = "<style>p {color:red}</style>";
  return Promise.resolve(`${begin}${colorStyle}${splitter}${end}`);
};

const colorPluginValidator = async () => [];

// DON NOT FORGET REGISTER THE PLUGIN
registerPlugin("render", ColorPlugin, colorPlugin, colorPluginValidator);
exports.ColorPlugin = ColorPlugin;
