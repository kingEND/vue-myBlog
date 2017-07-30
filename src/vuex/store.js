/**
 * Created by Administrator on 2017/7/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Top250 from './modules/Top250'
Vue.use(Vuex)

// 定义初始化的state
const state = {}

// 定义初始化的mutations
const mutations = {}

// 定义初始化的actions
const actions = {
  test () {
    console.log('hell super')
  }
}

// 定义子模块
const modules = {
  Top250: Top250
}

// 将对象导出
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: {},
  actions: actions,
  modules: modules
})
