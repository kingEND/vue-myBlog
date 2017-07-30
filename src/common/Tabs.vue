<template>
  <div class="Tabs-menu">
    <div v-for="(item,index) in items" class="Tabs-item" :class="{active: activeTab === index}"
         @click="routerTop250(item.url,index)">
      <i class="iconfont" :class="item.icon"></i>
      {{item.itemname}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      activeTab: 0
    },
    data () {
      return {
        items: [
          {
            itemname: '简历',
            url: '/',
            icon: 'icon-jianli'
          },
          {
            itemname: 'Top250',
            url: 'Top250',
            icon: 'icon-dianying'
          }
        ]
      }
    },
    methods: {
      routerTop250 (url, index) {
        this.$emit('routerTop', {url: url, index: index})
      },
      init () {
      },
      slide: {
        getTouchStart (event) {
          console.log(event)
        },
        getTouchMove (event) {
          console.log(event)
        },
        getTouchEnd (event) {
          console.log(event)
        },
//        获取滚动的位置
        getScrollTop (element) {
          if (element) {
            return element.scrollTop
          }
        },
//        获取滚动可视的高度
        getVisibleHeight (element) {
          if (element) {
            return element.scrollTop
          }
        },
//        获取滚动高度区域信息
        getScrollHeight (element) {
          if (element) {
            return element.scrollTop
          }
        },
//        实现检查是否下拉刷新
        doCheck (element) {
          console.log(element)
        }
      }
    }
  }
</script>

<style scoped>
  .Tabs-menu {
    display: flex;
    justify-content: flex-start;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .Tabs-item {
    width: 50%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    background-color: #e4e4e4;
    color: #666;
  }

  .active {
    background-color: #bbb;
  }
</style>
