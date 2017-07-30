<template>
  <div class="Casts-wrap">
    <div class="Casts-list">
      <div v-for="(item, index) in directors" class="Casts-item">
        <img class="Casts-img" :src="item.avatars.medium" alt="">
        <div class="Casts-content">
          <span class="tips">导演:</span>
          <span>{{item.name}}</span>
        </div>
      </div>
      <div v-for="(item, index) in casts" class="Casts-item">
        <img class="Casts-img" :src="item.avatars.medium" alt="">
        <div class="Casts-content">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      casts: '',
      directors: ''
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>

  .Casts-wrap {
    width: 100%;
    position: absolute;
    overflow: auto;
  }
  .Casts-list {
    width: 1300px;
    flex-direction: row;
  }

  .Casts-item {
    width: 120px;
    margin: 0px 5px;
    float: left;
  }

  .Casts-content {
    padding: 3px 0px;
  }

  .Casts-img {
    width: 120px;
    height: 150px;
    background-color: blue;
  }
</style>
