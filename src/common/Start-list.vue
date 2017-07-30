<template>
  <div>
    <div class="Start-list">
      <i v-for="i in startList.average" class="iconfont icon-star star"></i>
      <i v-for="i in (startList.len - startList.starts)" class="iconfont icon-jiaxingwenjian star"></i>
      <!--<i class="iconfont icon-star star"></i>-->
      <!--<i class="iconfont icon-star star"></i>-->
      <!--<i class="iconfont icon-star star"></i>-->
      <!--<i class="iconfont icon-star star"></i>-->
      <span class="tips">{{startList.average}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.startList.len = Math.ceil(Number(this.rating.stars) / 10)
      this.startList.starts = Math.floor(Number(this.rating.average) / 100 * 50)
      this.startList.average = this.rating.average + '分'
//      console.log(this.startList)
    },
    props: {
      rating: {}
    },
    data () {
      return {
        startList: {}
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .tips {
    color: #999;
    font-size: 13px;
  }

  .star {
    color: #ffeb3b;
  }
</style>
