## When to use

包裹需要拖拽移动的元素，在页面内

## Method of use

```vue 
<drap-element>
  <div>需要拖拽的元素</div>
</drap-element>
```

## Parameter Settings

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | --------------------  | ------ | ----- | ----- | ---- |
| customStyle | 自定义行内样式       | Object | left | false |      |

## Note

在 `drap-element` 样式基础上添加自定义行内样式
```css
.drap-element {
    position: absolute;
    top: 5rem;
    cursor: move;
    padding: 5px;
}
```
