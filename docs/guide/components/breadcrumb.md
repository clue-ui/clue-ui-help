---
pageClass: component-page
---

# Breadcrumb 面包屑
  显示当前页面的路径，快速返回之前的任意页面。

::: demo to 等同于 route-link 中的 to 参数

```vue
<c-breadcrumb label="Postion:">
  <c-breadcrumb-item :to="{ path: '/' }">首页</c-breadcrumb-item>
  <c-breadcrumb-item :to="{ path: '/list' }">活动管理</c-breadcrumb-item>
  <c-breadcrumb-item :to="{ path: '/list' }">活动列表</c-breadcrumb-item>
  <c-breadcrumb-item>活动添加</c-breadcrumb-item>
</c-breadcrumb>
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
