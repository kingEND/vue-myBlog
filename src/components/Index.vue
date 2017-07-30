<template>
  <div relative>
    <router-view></router-view>
    <tabs :activeTab="activeTab" @routerTop="routerTop250"></tabs>
  </div>
</template>

<script>
  import Tabs from '@/common/Tabs.vue'
  export default {
    data () {
      return {
        activeTab: 0
      }
    },
    methods: {
      routerTop250 (data) {
        console.log(data)
        this.activeTab = data.index
        this.$router.push({path: data.url})
      }
    },
    components: {Tabs}
  }
</script>

<style scoped>
  [relative] {
    position: relative;
    height: 100vh;
    box-sizing: border-box;
  }

  [absolut] {
    position: fixed;
    bottom: 0px;
    left: 0px;
  }
</style>
