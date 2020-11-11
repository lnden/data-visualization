<template>
  <common-card
    title="今日交易用户数"
    value=" 39,165">
    <template>
      <vue-echarts :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <div>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/views/datav/mixins/commonCardMixin';

export default {
  name: 'today-users',
  mixins: [commonCardMixin],
  methods: {
    getOptions() {
      return {
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'],
          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [{
          type: 'bar',
          barWidth: '60%',
          data: [11, 22, 33, 22, 55, 44, 77, 22, 33, 88],
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      };
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
