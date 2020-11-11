<template>
  <section class="datav">
    <top-view/>
    <sales-view/>
    <bottom-view />
    <map-view />
  </section>
</template>

<script>
import TopView from './components/TopView/index.vue';
import SalesView from './components/SalesView/index.vue';
import BottomView from './components/BottomView/index.vue';
import MapView from './components/MapView/index.vue';

export default {
  name: 'datav',
  components: {
    TopView, SalesView, BottomView, MapView,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .datav {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
  }
</style>
