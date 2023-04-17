import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
import MyCategory from '../pages/MyCategory'
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: MyHome
        },
        {
            path: '/category',
            component: MyCategory
        }
    ]
})
