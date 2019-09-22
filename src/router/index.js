import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import echar from '@/components/echar'
import home from '@/components/home'
import page1 from '@/components/pege/page1'
import page2 from '@/components/pege/page2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/echar',
      name: 'echar',
      component: echar
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
