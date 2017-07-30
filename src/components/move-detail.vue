<template>
  <div>
    <!--海报-->
    <div class="Detail-wrap">
      <img :src="baseInfo.url" alt="无法显示">
    </div>
    <!--基本信息-->
    <div flex="center" padding="10">
      <span marginRight="5">{{baseInfo.title}}</span>
      <star :rating="baseInfo.rating"></star>
    </div>
    <!--影视简介-->
    <div class="Detail-tips-wrap"><span class="Detail-tips">影视简介</span><span class="outline"></span></div>
    <div>
      {{summary}}
      <span class="button-taps" @click="allSummary">{{buttonText}}</span>
    </div>
    <!--演员列表-->
    <div class="Detail-tips-wrap"><span class="Detail-tips">主演列表</span><span class="outline"></span></div>
    <casts :directors="Info.directors" :casts="Info.casts"></casts>
    <!--影评列表-->
    <div top class="Detail-tips-wrap"><span class="Detail-tips">影评列表</span><span class="outline"></span></div>
    <comment></comment>
  </div>
</template>

<script>
  import Star from '@/common/Start-list.vue'
  import Casts from '@/common/Casts-list.vue'
  import Comment from '@/common/Comment-list.vue'
  export default {
    created () {
      this.moveId = this.$route.query.index.id
      this.baseInfo = this.$route.query.index
      let url = '/v2/movie/subject/' + this.moveId
      this.$axios.get(url).then((data) => {
        let temp = data.data
        this.Info = {
          summary: temp.summary,
          casts: temp.casts,
          directors: temp.directors
        }
        this.summary = this.Info.summary.substring(0, 100)
        console.log(temp)
      })
    },
    data () {
      return {
        baseInfo: '',
        moveId: '',
        Info: '',
        isActive: true,
        summary: '',
        buttonText: '...展开'
      }
    },
    methods: {
      allSummary () {
        if (this.isActive) {
          this.summary = this.Info.summary.substring(0, 100)
          this.buttonText = '...展开'
        } else {
          this.summary = this.Info.summary
          this.buttonText = '收起'
        }
        this.isActive = !this.isActive
      }
    },
    components: {Star, Casts, Comment}
  }
</script>

<style scoped>
  .Detail-wrap {
    display: flex;
    width: 100%;
    background-color: #333;
    padding: 10px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .button-taps {
    color: blue;
    font-size: 16px;
    display: inline-block;
    width: 100px;
    height: 24px;
    line-height: 24px;
  }

  .Detail-content {
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .Detail-tips-wrap {
    width: 100%;
    height: 40px;
    line-height: 30px;
    padding: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }

  .Detail-tips {
    display: block;
    padding: 0 10px;
    background-color: white;
  }

  .outline {
    width: 100%;
    height: 1px;
    background-color: green;
    position: absolute;
    bottom: 50%;
    left: 0;
    z-index: -1;
  }

  [top] {
    margin-top: 190px;
  }
</style>
