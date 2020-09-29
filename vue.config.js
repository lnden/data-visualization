module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: `dist-${process.env.NODE_ENV}`,
  productionSourceMap: false,
  lintOnSave: 'error',
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
