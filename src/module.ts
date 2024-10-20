import { PanelPlugin } from '@grafana/data';
// import { SimpleOptions } from './types';
// import { SimplePanel } from './components/SimplePanel';
import { PanelOptions } from './types';
import { ImagePanel } from './components';

/*
  * Panel Plugins
*/
export const plugin = new PanelPlugin<PanelOptions>(ImagePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'url',
      name: 'Image URL',
      // description: 'Description of panel option',
      defaultValue: 'https',
    })
    // .addBooleanSwitch({
    //   path: 'showSeriesCount',
    //   name: 'Show series counter',
    //   defaultValue: false,
    // })
    // .addRadio({
    //   path: 'seriesCountSize',
    //   defaultValue: 'sm',
    //   name: 'Series counter size',
    //   settings: {
    //     options: [
    //       {
    //         value: 'sm',
    //         label: 'Small',
    //       },
    //       {
    //         value: 'md',
    //         label: 'Medium',
    //       },
    //       {
    //         value: 'lg',
    //         label: 'Large',
    //       },
    //     ],
    //   },
    //   showIf: (config) => config.showSeriesCount,
    // });
});
