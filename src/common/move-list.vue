<template>
  <div absolute>
    <div  id="moveList" class="move-list">
      <div class="move-item" v-for="(item, index) in moveList" @click="linkToDetail(item)">
        <img class="move-img" :src="item.url" alt="无法显示">
        <div class="move-content">
          <p class="move-name">{{item.title}}</p>
          <!--<p>暂无评分</p>-->
          <star :rating="item.rating"></star>
          <p><span class="tips">导演：</span><span>{{item.directors}}</span></p>
          <p><span class="tips">主演：</span><span>{{item.casts}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Star from '@/common/Start-list.vue'
  export default {
    props: {
      moveList: {}
    },
    data () {
      return {}
    },
    methods: {
      linkToDetail (index) {
        this.$router.push({path: 'MoveDetail', query: {index: index}})
      }
    },
    components: {Star}
  }
</script>

<style scoped>
  p {
    margin: 0;
    line-height: 24px;
  }

  .move-list {
    width: 100%;
    margin-top: 45px;
    margin-bottom: 45px;
    overflow: auto;
    height: 100vh;
  }

  .move-item {
    display: flex;
    justify-content: flex-start;
    margin-top: 5px;
  }

  .move-content {
    padding: 5px 10px;
  }

  .move-img {
    min-width: 120px;
    height: 150px;
    background-color: bisque;
    overflow: hidden;
  }

  .tips {
    color: #999;
  }

  .move-name {
    font-size: 16px;
    color: #333;
  }
</style>
