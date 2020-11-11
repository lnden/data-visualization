<template>
    <ve-wordcloud
      class="word-cloud"
      height="100%"
      :data="chartData"
      :settings="chartSettings"
    ></ve-wordcloud>
</template>

<script>
export default {
  name: 'word-cloud',
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'Javascript',
            value: 240,
          },
          {
            name: 'React',
            value: 120,
          },
          {
            name: 'Angular',
            value: 80,
          },
        ].concat(Array(10).fill(1).map(() => {
          const value = window.parseInt(Math.random() * 100);
          return {
            name: `机器人${value}号`,
            value,
          };
        })),
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,0.7)',
          'rgba(204,178,26,0.7)',
          'rgba(245,166,35,0.7)',
          'rgba(156,13,113,0.7)',
        ],
        // sizeRange: [8, 12]
        sizeMin: 10,
        sizeMax: 14,
      },
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
