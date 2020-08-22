<template>
  <without-data v-if="isSeriesEmpty" />
  <Echarts v-else v-bind="$props" />
</template>

<script>
import { isEmpty } from 'lodash';
import WithoutData from '@/components/WithoutData/index.vue';
import Echarts from './Echarts.vue';

export default {
  name: 'echarts',
  components: {
    WithoutData,
    Echarts,
  },
  props: Echarts.props,
  computed: {
    isSeriesEmpty() {
      return (
        isEmpty(this.seriesData) || this.seriesData.every((item) => !item.value)
      );
    },
  },
};
</script>
