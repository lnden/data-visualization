<template>
  <common-card
    title="累计订单量"
    value=" 1,039,165">
    <template>
      <vue-echarts :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <div>
        <span>昨日订单量 </span>
        <span class="emphasis"> 2,000,000</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/views/datav/mixins/commonCardMixin';

export default {
  name: 'total-orders',
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return ({
        xAxis: {
          type: 'category',
          show: false,
          // 让图表完全伸展开 和两边没间隔
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [{
          type: 'line',
          data: [11, 22, 33, 22, 55, 44, 77, 22, 33, 88],
          areaStyle: {
            color: 'purple',
          },
          smooth: true,
          // 控制线条
          lineStyle: {
            width: 0,
          },
          // 数据点是 itemStyle 来控制
          itemStyle: {
            opacity: 0,
          },
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
