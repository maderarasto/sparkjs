import {Spark, createRef} from "./spark.js";
import Component from "./component.js";

/**
 *
 * @param {SparkJS.AppConfig} config
 */
export function createApp(config) {
  if (typeof config !== "object") {
    throw new Error('Missing necessary options defined in given config.');
  }

  window.$app = new Spark();
  window.$app.setRootFunction(config.render);

  document.addEventListener('DOMContentLoaded', () => {
    $app.mount(config.mountEl);
  });
}

const SparkJS = {
  Spark,
  Component,
  createRef,
  createApp,
};

export default SparkJS;