import { Plugin, compilation } from "webpack";

interface PluginOption {
  hooks: string;
  callback?: (compilation: compilation.Compilation) => Promise<any>;
}

export class LifeCyclePlugin implements Plugin {
  constructor(public options: PluginOption) {}
  apply(compiler) {
    const { hooks, callback } = this.options;
    compiler.hooks[hooks].tapPromise("LifeCyclePlugin", compilation => {
      return callback?.(compilation) ?? Promise.resolve(compilation)
    });
  }
}
