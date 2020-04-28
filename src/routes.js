import Dashboard from './components/Dashboard.vue'
import DashboardIndex from './components/modules/dashboard/Index.vue'
import NotFound from './components/modules/dashboard/404.vue'
import WidgetsIndex from './components/modules/widgets/Index.vue'
import UITimeline from './components/modules/ui/Timeline.vue'
import UITimein from './components/modules/ui/Timein.vue'
import Mail from './components/modules/Mail.vue'
import concent from './components/partials/concent.vue'
import ShopHome from './components/modules/ShopHome.vue'
import InvoicePage from './components/modules/common-page/Invoice.vue'
import Profile from './components/modules/common-page/Profile.vue'
import NotFoundSecond from './components/modules/dashboard/500.vue'
import SimpleTable from './components/modules/tables/SimpleTable.vue'
import SelectTable from './components/modules/tables/SelectTable.vue'
import Upload from './components/modules/ui/Upload.vue'
import login from './components/login.vue'
import dash from './components/dash.vue'
import tables from './components/modules/widgets/tables.vue'
const routes =[
  {
    path:'/',
    name:'login',
    component:login,
  },
  {
    path:'/dash',
    name:'dash',
    component:dash,
    meta:{requiresAuth: true},
    beforeEnter:(to,from,next)=>{
      //菜单导航
      document.body.className += 'skin-dark sidebar-mini'
      next()
    },
    activate:function(){
      this.$nextTick(function(){
        alert('test')
      })
    },
    children:[
      {
        path: '/concent',
        name: 'concent',
        component: concent
      },
      {
        path:'/mail',
        name:'mail',
        component:Mail,
        children:[
          {
            path:'/tables',
            name:'tables',
            component:tables
          },
          {
            path: '/simple-table',
            name: 'simple-table',
            component: SimpleTable
          },
        ]
      }
    ]
  },
  {
    path: '/Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
    //菜单导航mete
      document.body.className += 'skin-dark sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardIndex
      }, {
        path: '/dashboard',
        name: 'dashboard-first',
        component: DashboardIndex
      }, {
        path: '/shop-home',
        name: 'shop-home',
        component: ShopHome
      }, {
        path: '/invoice',
        name: 'invoice',
        component: InvoicePage
      }, {
        path: '/widgets',
        name: 'widgets',
        component: WidgetsIndex
      }, {
        path: '/mail',
        name: 'mail',
        component: Mail
      }, {
        path: '/profile',
        name: 'profile',
        component: Profile
      }, {
        path: '/404',
        name: '404-eror',
        component: NotFound
      }, {
        path: '/500',
        name: '500',
        component: NotFoundSecond
      }, {
        path: '/simple-table',
        name: 'simple-table',
        component: SimpleTable
      }, {
        path: '/select-table',
        name: 'select-table',
        component: SelectTable
      }, {
        path: '/ui/timeline',
        name: 'ui-timeline',
        component: UITimeline
      }, {
        path: '/ui/timein',
        name: 'ui-timein',
        component: UITimein
      }, {
        path: '/ui/ui-upload',
        name: 'ui-upload',
        component: Upload
      },
      {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  }
]

//访问其他组件之前判断是否是登录状态


// router.beforeEach((to, from, next) => {
//   // console.log('to:' + to.path)
//   if (to.path.startsWith('/login')) {
//       window.sessionStorage.removeItem('access-token')
//       next()
//   } else {
//       let token = window.sessionStorage.getItem('access-token')
//       if (!token) {
//           next({ path: '/login' })
//       } else {
//           next()
//       }
//   }
// })


export default routes


