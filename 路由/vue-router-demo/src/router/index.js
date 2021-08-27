import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/Abount.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import Detail from '../components/Detail.vue'
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
          meta: {
            isAuto: true
          }
        },
        {
          path: 'message',
          name: 'message',
          component: Message,
          meta: {
            isAuto: true
          },
          children: [
            {
              // path: 'detail/:id/:title',
              path: 'detail',
              name: 'detail',
              component: Detail,
              // 写法一： 值为对象
              // props: {
              //   id: '123',
              //   title: '4356'
              // }
              //  写法二， 把params传递给过去
              // props: true
              // 写法三：
              // props ($route) {
              //   return { id: $route.query.id, title: $route.query.title }
              // }
              props ({ query: { id, title } }) {
                return { id: id, title: title }
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.isAuto) {
    if (to.path === '/home/news' || to.path === '/home/message') {
      if (localStorage.getItem('school') === 'guigu') {
        next()
      } else {
        alert('没有权限')
      }
    } else {
      next()
    }
  }
})
export default router
