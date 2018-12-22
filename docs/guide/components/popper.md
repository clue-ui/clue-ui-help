---
pageClass: component-page
---

# Popper 弹出框

::: demo 使用 placement="" 来设置弹出位置, 可选值`top`、`bottom`、`left`、`right`
```vue
<c-popover>
  <div class="border bg-white p-2 rounded mt-1">
    <p class="text-lg">Call: 138-1234-5678</p>
  </div>

  <c-button type="primary" slot="reference">primary</c-button>
</c-popover>
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
