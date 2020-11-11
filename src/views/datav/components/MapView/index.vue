<template>
  <div class="map-view">
    <div class="left-map">
      <b-map-scatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>
        <div class="chart-wrapper">
          <liquid-fill/>
        </div>
      </el-card>
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>
        <div class="chart-wrapper">
          <word-cloud/>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import BMapScatter from './components/BMapScatter.vue';
import WordCloud from './components/WordCloud.vue';
import LiquidFill from './components/LiquidFill.vue';

export default {
  name: 'map-view',
  components: { BMapScatter, WordCloud, LiquidFill },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .map-view {
    display: flex;
    margin-top: 20px;
    .left-map {
      flex: 0 0 80%;
      width: 80%;
      height: 600px;
      background-color: #fff;
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;
      .title {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding-left: 20px;
      }
      .chart-wrapper {
        width: 100%;
        height: 190px;
      }
    }
  }
</style>
