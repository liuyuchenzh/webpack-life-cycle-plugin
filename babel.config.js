module.exports = {
  presets: [
    [
      "@babe/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: ["transform-runtime"],
  parserOpts: {
    plugins: ["dynamicImport"]
  }
};
