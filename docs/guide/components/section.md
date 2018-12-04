---
pageClass: component-page
---

# Section
  等有缘人来写

::: demo 使用`type`、`plain`、`round`和`circle`属性来定义99k的样式

```vue
<c-section title="来个妹子">
  <ul>
    <li v-for="a in 3" :key=a>哦我们呢来了 ( {{a}} ) ~!</li>
  </ul>

  <div slot="footer" style="text-align:center;">
    footer
  </div>
</c-section>
```
:::


### Props
| 名称 | 描述 | 类型 | 默认值 |
| ------ | ------ | :------: | :------: |
| type | 按钮类型, 可选值 `primary` `info` `success` `warning` `danger` | String | - |


### Event
| 事件 | 描述 | 参数 |
| ------ | ------ | ------ |
| click | 鼠标点击事件 | - |
