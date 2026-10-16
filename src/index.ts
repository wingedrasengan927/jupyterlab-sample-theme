import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-sample-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-sample-theme:plugin',
  description: 'A simple JupyterLab theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab Sample Theme is activated!');
    const style = 'jupyterlab-sample-theme/index.css';

    manager.register({
      name: 'jupyterlab-sample-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
