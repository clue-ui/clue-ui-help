---
pageClass: component-page
---

# Form 表单

### 基础用法
::: demo 功能还不够完善, 期待你的参与

```vue
<template>
  <c-form>
    <c-form-item label="活动名称:">
      <c-input v-model="form.name"
        placeholder="请输入活动名称"
        style="width:100%"
      ></c-input>
    </c-form-item>

    <c-form-item label="活动场地:">
      <c-radio-group v-model="form.address">
        <c-radio value="pg">故宫</c-radio>
        <c-radio value="lz">水立方</c-radio>
        <c-radio value="kg">园博园</c-radio>
      </c-radio-group>
    </c-form-item>

    <c-form-item label="主办单位:">
      <c-checkbox-group v-model="form.sponsor">
        <c-checkbox value="banner">香蕉</c-checkbox>
        <c-checkbox value="apple">苹果</c-checkbox>
        <c-checkbox value="ibm">IBM</c-checkbox>
        <c-checkbox value="microsoft">微软</c-checkbox>
      </c-checkbox-group>
    </c-form-item>

    <c-form-item label="活动说明:">
      <c-textarea v-model="form.descript"
        placeholder="enter somethind..."
        style="width: 100%"
      ></c-textarea>
    </c-form-item>

    <!-- submit -->
    <c-form-item style="text-align: right;">
      <c-button type="primary">提 交</c-button>
      <c-button>重 置</c-button>
    </c-form-item>
  </c-form>
</template>
```
:::

### Props

| 名称 | 描述 | 类型 | 默认值 |
| ------ | ------ | :------: | :------: |
| placeholder | 规定可描述输入字段预期值的简短的提示信息 | String | - |
| autocomplete | 规定输入字段是否启用自动完成功能 | Boolen | false |
| readonly | 规定输入字段为只读 | Boolen | false |
| autofocus | 规定当页面加载时 input 元素应该自动获得焦点 | Boolen | false |

### Event
| 事件 | 描述 | 参数 |
| ------ | ------ | ------ |

<script>
export default {
  data: function () {
    return {
      form: {}
    }
  }
}
</script>