---
pageClass: component-page
---

# Radio 单选
  常用的操作按钮11323232sldkalsdkl1。

### 基出用法
::: demo 说明飞走了..., 我还会回来的
```vue
<template>
  <c-radio v-model="radio1" value="xj">香蕉</c-radio>
  <c-radio v-model="radio1" value="pg">苹果</c-radio>
  <c-radio v-model="radio1" value="jz">橘子</c-radio>
</template>
```
:::

### 分组
::: demo 说明飞走了..., 我还会回来的
```vue
<template>
  <c-radio-group v-model="radio2">
    <c-radio value="pg">苹果</c-radio>
    <c-radio value="lz">李子</c-radio>
    <c-radio value="kg">苦瓜</c-radio>
  </c-radio-group>
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
      radio1: null,
      radio2: null
    }
  }
}
</script>