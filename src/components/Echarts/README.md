## When to use

用户页面图表展示，容错图表无数据展示默认图

## Method of use
1、引用 `index` 组件 (自动引入 `WithoutData` 组件，根据 `seriesData` 状态来区分展示)
```vue  
import Echarts from '@/components/Echarts/index.vue';
<div class="echart-wrapper">
    <Echarts :seriesData="seriesData" :extraOption="extraOption"></Echarts>
</div>
```
2、引用 `Echarts` 组件 (单纯的 `Echart` 组件)
```vue  
import Echarts from '@/components/Echarts.vue';
<div class="echart-wrapper">
    <Echarts :seriesData="seriesData" :extraOption="extraOption"></Echarts>
</div>
```
## Parameter Settings

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | --------------------  | ------ | ----- | ----- | ---- |
| seriesData | 序列数据           | Array | [{},{}] | false  |      |
| extraOption | 额外的配置       | Object | {color:[]} | false |      |


## Note

使用该组件需要在外层包裹一个带有宽高的容器，该组件继承父亲容器的宽高，监控父组件的尺寸变化来重置自己的样式。

> colors.js 为 Echarts 图表配色配置

> default_option.js 为 Echarts 图表默认配置
