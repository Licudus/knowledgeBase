import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyLogin from '../pages/MyLogin'
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home/article'
    },
    {
      path: '/login',
      component: MyLogin
    },
    {
      path: '/home',
      component: MyHome,
      children: [
        {
          path: 'article',
          component: () => import('../pages/MyArticle')
        },
        {
          path: 'category',
          component: () => import('../pages/MyCategory')
        },
        {
          path: 'publish',
          meta: {
            requireAuth: true
          },
          component: () => import('../pages/MyPublish')
        },
        {
          path: 'user',
          component: () => import('../pages/MyArticle')
        },
        {
          path: 'articleDetails/:id',
          component: () => import('../pages/MyArticleDetails')
        }
      ]
    }
  ]
})
