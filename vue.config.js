const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const GitRevision = new GitRevisionPlugin();
const buildDate = JSON.stringify(new Date().toLocaleString());

// check Git
function getGitHash() {
  try {
    return GitRevision.version();
  } catch (e) {
    return 'unknown';
  }
}

// vue.config.js
const vueConfig = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: `dist-${process.env.NODE_ENV}`,
  productionSourceMap: false,
  lintOnSave: 'error',
  configureWebpack: {
    // webpack plugins
    plugins: [
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        GIT_HASH: JSON.stringify(getGitHash()),
        BUILD_DATE: buildDate,
      }),
    ],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },
};

module.exports = vueConfig;
