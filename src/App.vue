<template>
  <div id="app">
    <el-button>el-button</el-button>
    <svg-icon iconClass="school-body"></svg-icon>
    <div class="echart-wrapper">
      <Echarts :seriesData="seriesData" :extraOption="extraOption"></Echarts>
    </div>
  </div>
</template>

<script>
import Echarts from '@/components/Echarts/index.vue';

export default {
  name: 'app',
  data() {
    return {
      seriesData: [
        {
          name: '西瓜',
          value: 20,
        },
        {
          name: '橘子',
          value: 13,
        },
        {
          name: '杨桃',
          value: 33,
        },
      ],
      extraOption: {
        color: ['#fe883a', '#2d90d1', '#f75981', '#90e2a9'],
      },
    };
  },
  components: {
    Echarts,
  },
};
</script>

<style scoped>
  .echart-wrapper {
    width: 300px;
    height: 300px;
    margin: 10px auto;
  }
</style>
