<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot></slot>
    </div>
    <div class="line"/>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'common-card',
  props: {
    title: String,
    value: String,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  span {
    font-size: 12px;
  }
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .chart {
    height: 50px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    font-size: 12px;
    color: #666;
  }
</style>

<style lang="scss">
  .emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
  .increase {
    width: 0;
    height: 0;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent red transparent;
    margin: 0 0 3px 5px;
  }
  .decrease {
    width: 0;
    height: 0;
    border-width: 3px;
    border-style: solid;
    border-color: green transparent transparent transparent;
    margin: 3px 0 0 5px;
  }
</style>
