---
pageClass: component-page
---

# Button 按钮
  常用的操作按钮。

::: demo 使用`type`、`plain`、`round`和`circle`属性来定义99k的样式
```vue
<c-button>Default</c-button>
<c-button type="primary">primary</c-button>
<c-button type="info">Info</c-button>
<c-button type="success">Success</c-button>
<c-button type="warning">Warning</c-button>
<c-button type="danger">Danger</c-button>
```
:::

### 图标按钮
::: demo 使用 `icon` 选项使用图标功能, 可用图标见 Fontawesome
```vue
<c-button icon="fa fa-street-view" type="primary">Default</c-button>
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
