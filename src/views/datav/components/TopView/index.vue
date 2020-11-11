<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from './components/TotalSales.vue';
import TotalOrders from './components/TotalOrders.vue';
import TodayUsers from './components/TodayUsers.vue';
import TotalUsers from './components/TotalUsers.vue';

export default {
  name: 'top-view',
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
<style>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
