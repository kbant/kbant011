// ERROR  TypeError: Cannot read property 'handleSetJSResponder' of null, js engine: hermes
// ERROR  TypeError: Cannot read property 'handleClearJSResponder' of null, js engine: hermes
// - Add react-native-gesture-handler
// - cd ios && pod install
// import 'react-native-gesture-handler';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
export const decorators = [withBackgrounds];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
};
