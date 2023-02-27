const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const { getWebpackTools, getMonorepoRoot } = require('react-native-monorepo-tools');

const webpackTools = getWebpackTools();
const monorepoRoot = getMonorepoRoot();

const currentWorkspace = 'web';
// craco babel loader
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
  webpack: {
    alias: {
      react: `${monorepoRoot}/packages/${currentWorkspace}/node_modules/react`,
      'react-native': `${monorepoRoot}/packages/${currentWorkspace}/node_modules/react-native-web`,
      // '@react-native-async-storage/async-storage': `${monorepoRoot}/packages/${currentWorkspace}/node_modules/@react-native-async-storage/async-storage`,
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
      return webpackConfig;
    },
    plugins: [
      // Inject the React Native "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV != 'production',
      }),
    ],
  },
  eslint: {
    enable: false,
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@app': '../app/src',
          },
        },
      ],
    ],
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
          resolveApp('../../node_modules/@react-native-async-storage/async-storage'),
        ],
      },
    },
  ],
};
