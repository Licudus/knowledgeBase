import VueRouter from 'vue-router'
import MyHome from '../pages/MyHome'
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: MyHome
        }
    ]
})
