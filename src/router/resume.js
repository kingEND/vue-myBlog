/**
 * Created by Administrator on 2017/7/28.
 */

import Resume from '@/components/Resume.vue'
import Top250 from '@/components/Top250.vue'
import MoveDetail from '@/components/move-detail.vue'

export default [
  {
    path: '',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Top250',
    name: 'Top250',
    component: Top250
  },
  {
    path: '/moveDetail',
    name: 'moveDetail',
    component: MoveDetail
  }
]
