import { default as webpack, Configuration } from "webpack";
import { LifeCyclePlugin } from "../src/index";
import { resolve } from "path";
describe("General", () => {
  it("should be called", () => {
    expect.assertions(1);
    const configFile: Configuration = {
      entry: "entry.js",
      output: {
        filename: "app.js",
        path: resolve(__dirname, "dist")
      },
      plugins: [
        new LifeCyclePlugin({
          hooks: "afterCompile",
          callback: () => {
            expect(1);
            return Promise.resolve();
          }
        })
      ]
    };

    webpack(configFile, (err, stats) => {
      // Stats Object
      if (err || stats.hasErrors()) {
        // Handle errors here
      }
      // Done processing
    });
  });
});
