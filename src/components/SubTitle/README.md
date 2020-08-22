## When to use

各模块通用副标题展示，封装组件，根据传递参数展示对应标题

## Method of use

```vue  
<sub-title subTitle="教师学历分布" :suffix="false">
    <span>单位:万元</span>
</sub-title>
```

## Parameter Settings

| 参数      | 说明                  | 类型   | 默认值 | 必填 | 版本 |
| --------- | --------------------  | ------ | ----- | ----- | ---- |
| subTitle | 副标题名称           | String | sub-title默认值 | false  |      |
| suffix | 是否展示后缀图标       | Boolean | true | false |      |
