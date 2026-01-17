module.exports = {
  svgo: true,
  svgoConfig: {
    plugins: [{ removeViewBox: false }],
  },
  titleProp: true,
  ref: true,
  dimensions: false,
};

module.exports.plugins = [
  "@svgr/plugin-svgo",
  "@svgr/plugin-jsx",
  "@svgr/plugin-prettier",
];
