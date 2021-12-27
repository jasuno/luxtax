const withTM = require("next-transpile-modules")(["react-canada-map"]);

module.exports = withTM({
  reactStrictMode: true,
});
