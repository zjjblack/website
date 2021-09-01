import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Diary = () => import('../views/diary/Diary')
const Japanese = () => import('../views/japanese/Japanese')
const Photoshop = () => import('../views/photoshop/Photoshop')
const Software = () => import('../views/software/Software')

const UI = () => import('../views/ui/UI')
const Ecommerce = () => import('../views/ecommerce/Ecommerce')
const Phstu = () => import('../views/phstu/Phstu')
const Advertis = () => import('../views/advertis/Advertis')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/diary',
    component: Diary,
    meta: {
      title: 'Diary'
    }
  },
  {
    path: '/japanese',
    component: Japanese,
    meta: {
      title: 'Japanese'
    }
  },
  {
    path: '/photoshop',
    component: Photoshop,
    meta: {
      title: 'PhotoShop'
    }
  },
  {
    path: '/software',
    component: Software,
    meta: {
      title: 'Software'
    }
  },
  {
    path: '/photoshop/ui',
    component: UI,
    meta: {
      title: 'UI Design'
    }
  },
  {
    path: '/photoshop/ecommerce',
    component: Ecommerce,
    meta: {
      title: 'Electricity Design'
    }
  },
  {
    path: '/photoshop/advertis',
    component: Advertis,
    meta: {
      title: 'Advertising Design'
    }
  },
  {
    path: '/photoshop/phstu',
    component: Phstu,
    meta: {
      title: 'Studio Design'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
