<template>
  <div>自定义生命周期-查看控制台</div>
</template>

<script>
export default {
  name: 'custom-life-cycle-demo',
  methods: {
    $_hanldeVisiblityChange() {
      if (document.visibilityState === 'hidden') {
        // console.log('hook方式-停掉那一堆东西');
      }
      if (document.visibilityState === 'visible') {
        // console.log('hook方式-开启那一堆东西');
      }
    },
  },
  created() {
    window.addEventListener('visibilitychange', this.$_hanldeVisiblityChange);
    // 此处用了hookEvent
    this.$on('hook:beforeDestroy', () => {
      // console.log('组件关闭时为0');
      window.removeEventListener('visibilitychange', this.$_hanldeVisiblityChange);
    });
  },
  pageVisible() {
    // console.log('页面显示出来了');
  },
  pageHidden() {
    // console.log('页面隐藏了');
  },
};
</script>
