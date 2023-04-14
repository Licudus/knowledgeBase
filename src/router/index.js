import VueRouter from 'vue-router'
import MyLogin from '../pages/MyLogin'
import MyHome from '../pages/MyHome'
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/login',
            component: MyLogin
        },
        {
            path: '/home',
            component: MyHome
        }
    ]
})