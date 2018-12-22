---
pageClass: component-page
---

# Section 标签
  等有缘人来写

### 基本使用
::: demo 基本使用

```vue
<c-section>
  <ul class="ml-3">
    <li v-for="a in 3" :key=a>哦我们呢来了 ( {{a}} ) ~!</li>
  </ul>
</c-section>
```
:::

### 使用标题
::: demo 使用标题, 还可以通过 slot="header" 来自定义标题内容

```vue
<c-section title="嘛嘛说: 标题一定要长才容易被看到~~~~!!@#">
  <ul class="ml-3">
    <li v-for="a in 3" :key=a>哦我们呢来了 ( {{a}} ) ~!</li>
  </ul>

  <div slot="footer">使用页脚</div>
</c-section>
```
:::


### 使用页脚
::: demo 基本使用

```vue
<c-section title="页脚的使用">
  <ul class="ml-3">
    <li v-for="a in 3" :key=a>哦我们呢来了 ( {{a}} ) ~!</li>
  </ul>

  <div slot="footer">使用页脚</div>
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
