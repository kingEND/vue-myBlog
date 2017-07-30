/**
 * Created by Administrator on 2017/7/27.
 */
import axios from 'axios'

var Query = axios.create({
  timeout: 10000
})

// 如果使用了请求拦截，但是代理就无法请求回来数据了
// Query.interceptors.response.use(() => {
//   console.log('request before do some')
// })

Query.interceptors.response.use((data) => {
  console.log(data)
  return data
})

export default {
  getMoveList (opts) {
    return Query.get(opts.url)
  }
}
