<template>
  <div class="demo-block">
    <slot name="source"></slot>

    <div class="demo-block-meta" v-if="!isFold">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>

      <slot name="highlight"></slot>
    </div>

    <div class="demo-block-control">
      <div class="demo-block-btn" @click="isFold = !isFold">{{ isFold ? '显示代码' : '隐藏代码'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: [String],
      default: null
    }
  },
  data: function () {
    return {
      isFold: false
    }
  },
  mounted () {
    // console.debug('>>>>>>>>>>>', this.$slots.default)
  }
}
</script>

<style lang="scss">
$border-color: #dae1e7;

.demo-block {
  overflow: hidden;
  margin: 1rem 0;
  border:1px solid $border-color;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);

  .source {
    padding: 10px;
  }

  .demo-block-meta {
    overflow: hidden;
    padding: 10px;
    background-color: #f1f5f8;
    border-top:1px solid $border-color;
    box-sizing: border-box;
    // transition:height .2s;

    .description {
      border: 1px solid $border-color;
      border-radius: 3px;
      padding: 5px;
      background-color: white;

      p {
        margin-block-start: inherit;
        margin-block-end: inherit;
      }
    }
  }

  .demo-block-control {
    padding: 10px;
    border-top:1px solid $border-color;
    margin-top: -1px;
    box-sizing: border-box;

    .demo-block-btn {
      text-align: center;
      cursor: pointer;
      color: #009688;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
}
</style>
