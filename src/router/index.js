import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyLogin from '../pages/MyLogin'
// import MyArticle from '../pages/MyArticle'
// import MyCategory from '../pages/MyCategory'
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home/article',
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
                    component: () => import('../pages/MyArticle')
                },
                {
                    path: 'user',
                    component: () => import('../pages/MyArticle')
                }
            ]
        },
    ]
})
