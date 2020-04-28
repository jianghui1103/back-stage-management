// import Vue from 'vue'
// import Router from 'vue-router'
// import Dashboard from './components/Dashboard.vue'
// //import Login from '@/components/Login'
// // 懒加载方式，当路由被访问的时候才加载对应组件
// const Login = resolve => require(['@/components/Login'], resolve)
 
// Vue.use(Router)
 
// let router = new Router({
//     routes: [{
//             path: '/',
//             name: 'login',
//             component: Login
//         }, {
//             path: '/login',
//             name: 'login',
//             component: Login
//         },
//         {
//             path: '/dashboard',
//             name: 'dashboard',
//             component: Dashboard
//         }
 
//     ]
// })
 
// // 控制页面跳转权限
// router.beforeEach((to, from, next) => {
//     // console.log('to:' + to.path)
//     if (to.path.startsWith('/login')) {
//         window.sessionStorage.removeItem('access-token')
//         next()
//     } else {
//         let token = window.sessionStorage.getItem('access-token')
//         if (!token) {
//             next({ path: '/login' })
//         } else {
//             next()
//         }
//     }
// })
 
// export default router