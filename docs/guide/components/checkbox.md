---
pageClass: component-page
---

# Checkbox 多选
  常用的操作按钮。

### 基出用法
::: demo 说明飞走了..., 我还会回来的
```vue
<template>
  <c-checkbox v-model="checkbox1" value="xj">香蕉</c-checkbox>
  <c-checkbox v-model="checkbox1" value="pg">苹果</c-checkbox>
  <c-checkbox v-model="checkbox1" value="jz">橘子</c-checkbox>
</template>
```
:::

### 分组
::: demo 说明飞走了..., 我还会回来的
```vue
<template>
  <c-checkbox-group v-model="checkbox2">
    <c-checkbox value="pg">苹果</c-checkbox>
    <c-checkbox value="lz">李子</c-checkbox>
    <c-checkbox value="kg">苦瓜</c-checkbox>
  </c-checkbox-group>
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

<script>
export default {
  data: function () {
    return {
      checkbox1: [],
      checkbox2: []
    }
  }
}
</script>
