## When to use

大屏展示数字滚动特效

## Method of use

```vue  
<count-to
  class="example"
  ref="example"
  :start-val="startVal"
  :end-val="endVal"
  :duration="duration"
  :decimals="decimals"
  :separator="separator"
  :prefix="prefix"
  :suffix="suffix"
  :autoplay="false" 
/>
```

## Parameter Settings

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | --------------------  | ------ | ----- | ----- | ---- |
| startVal | 开始数值           | Number | 2017 | true  |      |
| endVal | 结束数值       | Number | 2020 | false |      |
| duration | 延迟时间       | Number | 4000 | false |      |
| decimals | 小数，位数       | Number | 2 | false |      |
| separator | 分隔符       | string | ',' | false |      |
| prefix | 前缀       | string | '¥' | false |      |
| suffix | 后缀       | string | 'RMB' | false |      |
| autoplay | 是否自动       | Boolean | false | false |      |
| start() | 开始       | Function | void | false |      |
| pauseResume() | 暂停/开始       | Function | void | false |      |
