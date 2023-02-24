const webpack = require('webpack');
const path = require('path');
const { getWebpackTools, getMonorepoRoot } = require('react-native-monorepo-tools');

const webpackTools = getWebpackTools();
const monorepoRoot = getMonorepoRoot();

const currentWorkspace = 'electron';
module.exports = {
  webpack: {
    alias: {
      'react-native$': 'react-native-web',
      react: `${monorepoRoot}/packages/${currentWorkspace}/node_modules/react`,
      'react-native': `${monorepoRoot}/packages/${currentWorkspace}/node_modules/react-native-web`,
      '@react-native-async-storage/async-storage': `${monorepoRoot}/packages/${currentWorkspace}/node_modules/@react-native-async-storage/async-storage`,
    },
    module: {
      loaders: {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
      },
    },
    configure: webpackConfig => {
      // Allow importing from external workspaces.
      webpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      // Set webpackConfig.resolve.alias with nohoist settings
      webpackTools.addNohoistAliases(webpackConfig);
      console.log(webpackConfig.resolve.alias);
      return webpackConfig;
    },
    plugins: [
      // Inject the React Native "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV != 'production',
      }),
      // Inject the "__SUBPLATFORM__" global variable.
      // It can be used to determine whether we're running within Electron or not.
      new webpack.DefinePlugin({
        __SUBPLATFORM__: JSON.stringify('electron'),
      }),
    ],
  },
  eslint: {
    enable: true,
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-export-namespace-from', 'react-native-reanimated/plugin', 'nativewind/babel'],
  },
  typescript: {
    enableTypeChecking: true,
  },
  plugins: [
    {
      plugin: require('craco-babel-loader'),
      options: {
        includes: [
          path.resolve(__dirname, '../../node_modules/react-native-paper'),
          path.resolve(__dirname, '../../node_modules/react-native-reanimated'),
          path.resolve(__dirname, '../../node_modules/react-native-safe-area-context'),
          path.resolve(__dirname, '../../node_modules/@react-navigation'),
          path.resolve(__dirname, '../../node_modules/react-native-vector-icons'),
        ],
      },
    },
  ],
};
