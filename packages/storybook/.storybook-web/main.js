const path = require('path');

const ttfLoaderConfiguration = {
  test: /\.ttf$/,
  loader: 'url-loader',
  include: [path.resolve('../../packages/storybook/node_modules/react-native-vector-icons')],
};

module.exports = {
  stories: ['../stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native-web': path.resolve('../../packages/storybook/node_modules/react-native-web'),
    };
    config.module.rules = [...config.module.rules, ttfLoaderConfiguration];
    return config;
  },
};
