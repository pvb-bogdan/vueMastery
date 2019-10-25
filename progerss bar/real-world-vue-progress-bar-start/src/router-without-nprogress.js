import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import Nprogress from 'nprogress'
import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
      }
    }
  ]
})

// using router for progress bar

// start the progress bar whenn routing begins
router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start()
  next()
})

// finish the progress bar when routing is about to end
router.afterEach(() => {
  Nprogress.done()
})

export default router
