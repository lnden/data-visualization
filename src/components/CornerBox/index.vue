<template>
  <div class="outside-wrapper" :style="customOutsideStyle">
    <div
      v-for="(item, index) in arc.location && arc.location.slice(0, 4)"
      :key="index"
      :class="item"
      :style="borderColor"></div>
    <div class="inside-wrapper" :style="customInsideStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'corner-box',
  props: {
    arc: {
      type: Object,
      default: () => ({
        borderRadius: '',
        location: [],
      }),
    },
    colors: {
      type: Object,
      default: () => ({
        borderArc: '#127aa8',
        border: '#193c7d',
        background: 'linear-gradient(-45deg, #121063, #2e2577) left top no-repeat',
      }),
    },
  },
  computed: {
    customOutsideStyle() {
      const { arc: { borderRadius }, colors: { border, background } } = this;
      if (background) {
        return {
          borderRadius,
          borderColor: border,
          background,
        };
      }
      return {
        borderRadius,
        borderColor: border,
      };
    },
    customInsideStyle() {
      const { arc: { borderRadius }, colors: { borderArc } } = this;
      const background = `
            linear-gradient(to left , ${borderArc}, ${borderArc}) left top no-repeat,
            linear-gradient(to bottom, ${borderArc}, ${borderArc}) left top no-repeat,
            linear-gradient(to left, ${borderArc}, ${borderArc}) right top no-repeat,
            linear-gradient(to bottom, ${borderArc}, ${borderArc}) right top no-repeat,
            linear-gradient(to left, ${borderArc}, ${borderArc}) left bottom no-repeat,
            linear-gradient(to bottom, ${borderArc}, ${borderArc}) left bottom no-repeat,
            linear-gradient(to left, ${borderArc}, ${borderArc}) right bottom no-repeat,
            linear-gradient(to left, ${borderArc}, ${borderArc}) right bottom no-repeat`;
      return {
        borderRadius,
        background,
        backgroundSize: '2px 20px, 20px 2px, 2px 20px, 20px 2px',
      };
    },
    borderColor() {
      const { colors: { borderArc } } = this;
      return {
        borderColor: borderArc,
      };
    },
  },
};
</script>
<style scoped>
  .outside-wrapper {
    height: 100%;
    width: 100%;
    border: 2px solid;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 0px #0f0a57 inset;
  }

  .inside-wrapper {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    position: absolute;
    top: -2px;
    left: -2px;
  }

  .topLeft, .topRight, .bottomLeft, .bottomRight {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid;
    z-index: 0;
    box-sizing: border-box;
  }

  .topLeft {
    top: -2px;
    left: -2px;
    border-radius: 10px 0 0 0;
    border-right: none;
    border-bottom: none;
  }

  .topRight {
    top: -2px;
    right: -2px;
    border-radius: 0 10px 0 0;
    border-left: none;
    border-bottom: none;
  }

  .bottomLeft {
    bottom: -2px;
    left: -2px;
    border-radius: 0 0 0 10px;
    border-right: none;
    border-top: none;
  }

  .bottomRight {
    bottom: -2px;
    right: -2px;
    border-radius: 0 0 10px 0;
    border-left: none;
    border-top: none;
  }
</style>
