---
pageClass: component-page
---

# Tag 标签
  常用的操作按钮。

::: demo 使用`type`、`plain`、`round`和`circle`属性来定义99k的样式
```vue
<c-tag>Default</c-tag>
<c-tag type="primary">primary</c-tag>
<c-tag type="info">Info</c-tag>
<c-tag type="success">Success</c-tag>
<c-tag type="warning">Warning</c-tag>
<c-tag type="danger">Danger</c-tag>
```
:::

### 可关闭的
::: demo 设置`closable`属性可以定义一个标签是否可移除。
```vue
<c-tag closable>Default</c-tag>
<c-tag type="primary" closable>primary</c-tag>
<c-tag type="info" closable>Info</c-tag>
<c-tag type="success" closable>Success</c-tag>
<c-tag type="warning" closable>Warning</c-tag>
<c-tag type="danger" closable>Danger</c-tag>
```
:::

### 自定义色彩
::: demo 使用`type`、`plain`、`round`和`circle`属性来定义99k的样式
```vue
<c-tag class="bg-teal text-white">Default</c-tag>
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
