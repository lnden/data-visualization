## When to use

容器边框和边框圆角颜色不同，圆角边框容器，直角边框容器

## Method of use

```vue  
<corner-box class="item" :arc="arc" :colors="colors">
    容器内容
</corner-box>
```

## Parameter Settings

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | -------------------- | ------ | ----- | ----- | ---- |
| arc    | 圆角参数，边框圆角大小、位置  | Object | {} | false  |      |
| colors | 颜色参数，容器边框、边框圆角、背景  | Object | {} | true |      |

### arc

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | -------------------- | ------ | ----- | ----- | ---- |
| borderRadius | 圆角参数  | String | '10px 10px 10px 10px' | false  |      |
| location     | 圆角位置  | Array | ['topLeft', 'topRight', 'bottomRight', 'bottomLeft'] | false |      |

### colors

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | -------------------- | ------ | ----- | ----- | ---- |
| border     | 容器边框颜色    | String | '#193c7d' | true |      |
| borderArc  | 容器边框圆角颜色 | String | '#127aa8' | true  |      |
| background | 容器边背景     | String | 'linear-gradient(-45deg, #121063, #2e2577) left top no-repeat' | false |      |

## Note

默认该组件继承父元素宽高，如果该组件直接作为外层元素需要设置宽高，如 `class="item"`
