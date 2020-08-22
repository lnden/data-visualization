<template>
  <div class="sub-title">
    <span class="sub-prefix">
      <span class="prefix-icon"></span>{{subTitle}}
    </span>
    <div class="sub-suffix">
      <slot></slot>
      <svg-icon v-if="suffix" icon-class="public-sub-suffix" class="suffix-icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicSubTitle',
  props: {
    subTitle: {
      type: String,
      default: () => 'sub-title默认值',
    },
    suffix: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style scoped>
  .sub-title {
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(8, 251, 254, 1);
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .sub-prefix .prefix-icon {
    display: inline-block;
    width: 3px;
    height: 16px;
    border-left: 3px solid rgba(8, 251, 254, 1);
    border-right: 3px solid rgba(8, 251, 254, .2);
    background-color: rgba(8, 251, 254, .5);
    padding: 0 3px;
    background-clip: content-box;
    vertical-align: -2px;
    margin-right: 10px;
  }

  .sub-suffix {
    display: flex;
    color: rgba(2, 216, 255, 1);
    font-weight: normal;
  }

  .sub-suffix .suffix-icon {
    width: 22px;
    height: 22px;
    margin: 0 18px;
  }
</style>
