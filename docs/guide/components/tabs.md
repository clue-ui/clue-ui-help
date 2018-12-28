---
pageClass: component-page
---

# Tabs 标签页
  常用的操作按钮。

::: demo 使用`type`、`plain`、`round`和`circle`属性来定义99k的样式
```vue
<template>
  <c-tabs>
    <c-tab-pane label="用户管理">用户管理</c-tab-pane>
    <c-tab-pane label="配置管理">配置管理</c-tab-pane>
    <c-tab-pane label="角色管理">角色管理</c-tab-pane>
    <c-tab-pane label="定时任务补偿">定时任务补偿</c-tab-pane>
  </c-tabs>
</template>
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
