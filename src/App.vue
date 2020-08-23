<template>
  <div id="app">
    <el-button>el-button</el-button>
    <svg-icon iconClass="school-body"></svg-icon>
    <div class="echart-wrapper">
      <Echarts :seriesData="seriesData" :extraOption="extraOption"></Echarts>
    </div>
    <corner-box class="item" :arc="arc"  :colors="colors">
      容器盒子
    </corner-box>

    <corner-box class="item" :arc="arc"  :colors="colors">
      <sub-title subTitle="教师学历分布">
        <span>单位:万元</span>
      </sub-title>
    </corner-box>
    <drap-element>
      <div>需要拖拽的元素</div>
    </drap-element>
    <CountTo />
  </div>
</template>

<script>
import Echarts from '@/components/Echarts/index.vue';
import CornerBox from '@/components/CornerBox/index.vue';
import SubTitle from '@/components/SubTitle/index.vue';
import DrapElement from '@/components/DrapElement/index.vue';
import CountTo from '@/views/components-demo/CountTo/index.vue';

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
      arc: {
        borderRadius: '10px 10px 10px 10px',
        location: ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'],
      },
      colors: {
        border: '#193c7d',
        borderArc: '#127aa8',
        background: 'linear-gradient(-45deg, #121063, #2e2577) left top no-repeat',
      },
    };
  },
  components: {
    Echarts,
    CornerBox,
    SubTitle,
    DrapElement,
    CountTo,
  },
};
</script>

<style scoped>
  .echart-wrapper {
    width: 300px;
    height: 300px;
    margin: 10px auto;
  }
  .item {
    width: 600px;
    height: 300px;
  }
</style>
