import {EmberonApp} from "./lib/emberon";

export {createRef} from './lib/emberon';
export { default } from './lib/component';

/**
 *
 * @param {Emberon.AppConfig} config
 */
export function createApp(config) {
  if (typeof config !== "object") {
    throw new Error('Missing necessary options defined in given config.');
  }

  window.$app = new EmberonApp();
  window.$app.setRootFunction(config.render);

  document.addEventListener('DOMContentLoaded', () => {
    $app.mount(config.mountEl);
  });
}