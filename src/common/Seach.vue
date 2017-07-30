<template>
  <div class="seach-wrap">
    <input type="text" placeholder="搜索电影的名字" class="seach">
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .seach-wrap {
    display: flex;
    justify-content: center;
    background-color: aliceblue;
    position: fixed;
    width: 100%;
    padding: 5px;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
  .seach {
    outline: none;
    border: 1px solid #bbb;
    line-height: 30px;
    height: 30px;
    font-size: 16px;
    padding: 3px;
    width: 80%;
    border-radius: 3px;
  }
</style>
