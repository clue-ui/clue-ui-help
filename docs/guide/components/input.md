# Input 输入框

::: demo

```vue
<c-input placeholder="Enter something..."/>
<c-input readonly placeholder="只读"/>
<c-input type="password" placeholder="密码输入框"/>
```
:::

### Props

| 名称 | 描述 | 类型 | 默认值 |
| ------ | ------ | :------: | :------: |
| placeholder | 规定可描述输入字段预期值的简短的提示信息 | String | - |
| autocomplete | 规定输入字段是否启用自动完成功能 | Boolen | false |
| readonly | 规定输入字段为只读 | Boolen | false |
| autofocus | 规定当页面加载时 input 元素应该自动获得焦点 | Boolen | false |