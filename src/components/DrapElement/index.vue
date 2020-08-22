<template>
  <div class="drap-element" @mousedown="move" :style="customStyle">
    <div class="drap-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drap-element',
  props: {
    customStyle: {
      type: Object,
      default: () => ({
        left: `${(document.body.clientWidth) - 150}px`,
      }),
    },
  },
  methods: {
    move(event) {
      const odiv = event.target; // 获取目标元素
      if (odiv.className !== 'drap-element') return;
      // 计算出鼠标相对点击元素的位置,e.clientX获取的是鼠标的位置，OffsetLeft是元素相对于外层元素的位置
      const x = event.clientX - odiv.offsetLeft;
      const y = event.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        document.body.style.userSelect = 'none';
        // 获取拖拽元素的位置
        let left = e.clientX - x;
        let top = e.clientY - y;
        // 把拖拽元素 放到 当前的位置
        if (left <= 0) {
          left = 0;
        } else if (left >= document.body.offsetWidth - odiv.offsetWidth) {
          left = document.body.offsetWidth - odiv.offsetWidth;
        }
        if (top <= 0) {
          top = 0;
        } else if (top >= document.body.offsetHeight - odiv.offsetHeight) {
          top = document.body.offsetHeight - odiv.offsetHeight;
        }
        odiv.style.left = `${left}px`;
        odiv.style.top = `${top}px`;
      };
      // 为了防止 火狐浏览器 拖拽阴影问题
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        document.body.style.userSelect = '';
      };
    },
  },
};
</script>

<style scoped>
  .drap-element {
    position: absolute;
    top: 5rem;
    cursor: move;
    padding: 5px;
  }
  .drap-content {
    cursor: auto;
  }
</style>
