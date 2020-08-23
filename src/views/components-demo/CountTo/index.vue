<template>
  <div class="components-container">
    <count-to
      ref="example"
      :start-val="startVal"
      :end-val="endVal"
      :duration="duration"
      :decimals="decimals"
      :separator="separator"
      :prefix="prefix"
      :suffix="suffix"
      :autoplay="false"
      class="example"
    />
    <el-form :inline="true" class="form">
      <el-form-item label="startVal:">
        <el-input v-model.number="setStartVal" type="number" placeholder="开始数值"></el-input>
      </el-form-item>
      <el-form-item label="endVal:">
        <el-input v-model.number="setEndVal" type="number" placeholder="结束数值"></el-input>
      </el-form-item>
      <el-form-item label="duration:">
        <el-input v-model.number="setDuration" type="number" placeholder="延时时间"></el-input>
      </el-form-item>
      <el-form-item label="decimals:">
        <el-input v-model.number="setDecimals" type="number" placeholder="小数，位数"></el-input>
      </el-form-item>
      <el-form-item label="separator:">
        <el-input v-model.number="setSeparator" placeholder="分隔符"></el-input>
      </el-form-item>
      <el-form-item label="prefix:">
        <el-input v-model.number="setPrefix" placeholder="前缀"></el-input>
      </el-form-item>
      <el-form-item label="suffix:">
        <el-input v-model.number="setSuffix" placeholder="后缀"></el-input>
      </el-form-item>
      <el-button type="primary" @click="start">Start</el-button>
      <el-button type="warning" @click="pauseResume">pause/resume</el-button>
    </el-form>
    <aside>&lt;count-to :start-val=&#x27;{{ startVal }}&#x27; :end-val=&#x27;{{ endVal }}&#x27;
      :duration=&#x27;{{ duration }}&#x27;
      :decimals=&#x27;{{ decimals }}&#x27; :separator=&#x27;{{ separator }}&#x27; :prefix=&#x27;{{
      prefix }}&#x27; :suffix=&#x27;{{ suffix }}&#x27;
      :autoplay=false&gt;
    </aside>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: 'count-to',
  components: { countTo },
  data() {
    return {
      setStartVal: 2017,
      setEndVal: 2020,
      setDuration: 4000,
      setDecimals: 2,
      setSeparator: ',',
      setSuffix: ' rmb',
      setPrefix: '¥ ',
    };
  },
  computed: {
    startVal() {
      if (this.setStartVal) {
        return this.setStartVal;
      }
      return 0;
    },
    endVal() {
      if (this.setEndVal) {
        return this.setEndVal;
      }
      return 0;
    },
    duration() {
      if (this.setDuration) {
        return this.setDuration;
      }
      return 100;
    },
    decimals() {
      if (this.setDecimals) {
        if (this.setDecimals < 0 || this.setDecimals > 20) {
          // alert('digits argument must be between 0 and 20');
          return 0;
        }
        return this.setDecimals;
      }
      return 0;
    },
    separator() {
      return this.setSeparator;
    },
    suffix() {
      return this.setSuffix;
    },
    prefix() {
      return this.setPrefix;
    },
  },
  methods: {
    start() {
      this.$refs.example.start();
    },
    pauseResume() {
      this.$refs.example.pauseResume();
    },
  },
};
</script>

<style scoped>
  .components-container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .example {
    color: #F6416C;
    display: block;
    margin: 10px 0;
    font-size: 80px;
    font-weight: 500;
  }
</style>
