<template>
  <div padding="10">
    <move-list :moveList="moveList"></move-list>
    <Seach></Seach>
  </div>
</template>

<script>
  import Seach from '@/common/Seach.vue'
  import MoveList from '@/common/move-list.vue'
  import {mapMutations, mapState} from 'vuex'
  export default {
    created () {
      this.init()
    },
    mounted () {
      var that = this
      this.Element = document.getElementById('moveList')
      this.Element.addEventListener('scroll', function () {
        if (that.Element.scrollTop + that.Element.offsetHeight >= that.Element.scrollHeight) {
          that.nextpage = that.nextpage + that.count
          that.ajaxMoveList(that.nextpage, that.count)
        }
      })
    },
    data () {
      return {
        Element: '',
        start: 0,
        nextpage: 0,
        count: 20
      }
    },
    computed: {
      ...mapState({
        moveList: state => state.Top250.MoveList
      })
    },
    methods: {
      init () {
//       如果moveList不为空，就不加载新的数据
        if (this.moveList.length === 0) {
          this.ajaxMoveList(0, 20)
          console.log(this.moveList)
        }
      },
      ajaxMoveList (start, count) {
        let url = `/v2/movie/top250?start=${start}&count=${count}`
        this.$axios.get(url).then((data) => {
          let temp = data.data.subjects
          temp.forEach((item, index) => {
            this.moveList.push({
              id: item.id,
              title: item.title,
              rating: item.rating,
              url: item.images.medium,
              casts: item.casts.map((item) => {
                return item.name
              }).join(' / '),
              directors: item.directors.map((item) => {
                return item.name
              }).join(' / ')
            })
          })
        })
      },
      ...mapMutations(['setMoveList'])
    },
    components: {Seach, MoveList}
  }
</script>

<style scoped>
  body,html {
    overflow: hidden;
  }
</style>
