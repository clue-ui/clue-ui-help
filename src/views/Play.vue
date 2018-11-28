<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="btn-list">

      <c-input v-model="inputValue"/>

      <h3>{{ '[' + inputValue + ']' }}</h3>
      <c-button @click="onClick" type="success">Click ME!</c-button>

      <c-button @click="onClick" style="padding:5px;">padding-5px</c-button>

      <c-button @click="onClick" width="220">width-120</c-button>

      <c-button @click="onClick" width="220" style="color: blue;">width-120-blue</c-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
      inputValue: 'alkdlaksoio'
    }
  },
  methods: {
    onClick (e) {
      console.debug('[onClick]', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.btn-list {
  margin: auto;
  width: 600px;
  border: 1px solid #ccc;
  padding: 10px;

  .c-btn {
    display: block;

    + .c-btn {
      margin-top: 10px;
    }
  }
}
</style>
