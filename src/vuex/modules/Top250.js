/**
 * Created by Administrator on 2017/7/29.
 */
import api from '@/api/index'
// 负责管理Top250的数据
export default {
  state: {
    MoveList: [],
    count: 0
  },
  getters: {
    getMoveList: state => { return state.count }
  },
  mutations: {
    setMoveList (state, data) {
      state.MoveList = data
    }
  },
  actions: {
    getList ({state, commit, rootstate}, opts) {
      api.getMoveList(opts).then((data) => {
        console.log(data)
      })
    }
  }
}
