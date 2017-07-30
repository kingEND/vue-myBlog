<template>
  <div class="comment-list">
    <div v-for="i in 5" class="comment-item">
      <div flex>
        <avator :size="size"></avator>
        <span paddingSide="5">kingEND</span>
      </div>
      <div class="comment-content">
        <p paddingUp="5">是一对打小一起长大的师兄弟，两人一个演生，一个饰旦，
          一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城，
          为此，两人约定合演一辈子
        </p>
        <span paddingUp="5"  class="tips">2017-7-29</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Avator from '@/common/Avator.vue'
  export default {
    data () {
      return {
        size: 'small'
      }
    },
    components: {Avator}
  }
</script>

<style scoped>
  .comment-list {
    margin-bottom: 50px;
  }

  .comment-item {
    display: flex;
    flex-direction: column;
    padding: 10px 8px 10px 8px;
    border-bottom: 1px solid #ebebeb;
  }
</style>
