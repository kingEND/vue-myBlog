<template>
  <div>
    <div class="Avator-img" :class="classname">
      <img src="./../assets/logo.png" alt="无法显示" class="img">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      size: ''
    },
    data () {
      return {
        classname: this.size
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .Avator-img {
    width: 80px;
    height: 80px;
    border: 1px solid #bbb;
    border-radius: 50%;
    background-color: aqua;
    overflow: hidden;
  }

  .small {
    width: 40px;
    height: 40px;
  }
</style>
