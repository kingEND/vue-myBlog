<template>
  <div padding="10">
    <div>
      <avator flex="center"></avator>
      <div flex="center">
        <p marginUp="10"><span class="tips">格言:</span><span>&nbsp;&nbsp;技术之路漫漫，不亦乎坚持到底</span></p>
      </div>
      <p flex="center" class="title">博主简历</p>
      <div>
        <p marginUp="10" class="tips">技能点：</p>
        <p class="point">掌握运用vue+vue-router+vuex+axios+koa技术进行app和网页前端开发</p>
        <p class="point">熟练的运用vue开发的样式框架比如ElementUI，museUI</p>
        <p class="point">熟练运用普通的样式框架比如bootstrap,semanticUI</p>
        <p class="point">熟悉java语法，以及主流框架spring + struts + heibernate开发流程</p>
        <p class="point">了解mysql数据库的基本操作</p>
      </div>
      <div>
        <p marginUp="10" class="tips">自我简介：</p>
        <p class="smary">本人软件工程专业，本科实习生，喜欢和别人交流技术，在校期间参加了莞香校创队，
          并负责团队的官网开发，网站地址如下：http://www.gxgk.cc,之后在牛牛公司担任前端开发人员。主要负责公司的i家i户app的开发和维护
          使用vue编写前端交互组件，和扩充UI库的组件</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Avator from '@/common/Avator.vue'
  export default {
    data () {
      return {}
    },
    methods: {},
    components: {Avator}
  }
</script>

<style scoped>
  [flex], [flex~=center] {
    display: flex;
    justify-content: center;
  }
  .point {
    position: relative;
    margin-left: 50px;
  }
  .point + .point {
    margin-top: 5px;
  }
  .point:before {
    display: block;
    content: '';
    position: absolute;
    top: 5px;
    left: -20px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #666;
  }

  .tips {
    color: #999;
  }

  .title {
    background-color: white;
    z-index: 1;
    position: relative;
    padding-bottom: 5px;
    padding-top: 10px;
  }

  .title:before {
    display: block;
    content: "";
    width: 100%;
    height: 0;
    border: 1px solid #999;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .title:after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    bottom: -15px;
    left: calc(50% - 8px);
    border-top: 8px solid #999;
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }

  .smary {
    font-size: 12px;
    line-height: 24px;
    margin-bottom: 50px;
  }
</style>
