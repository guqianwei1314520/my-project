import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/*import Test from '@/components/Test'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['../components/Test.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/ticketsList',
      name: 'TicketsList',
      component: resolve => require(['../components/TicketsList.vue'], resolve)
    },
    {
      path: '/upload',
      name: 'FileUpload',
      component: resolve => require(['../components/FileUpload.vue'], resolve)
    },
    {
      path:'/addTickets',
      name:"AddTickets",
      component:resolve => require(['../components/AddTickets.vue'],resolve)
    }

  ]
})
