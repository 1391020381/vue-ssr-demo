// router.js

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Bar = r => require.ensure([], () => r(require('./components/Bar.vue')), 'advance')
const Foo = r => require.ensure([], () => r(require('./components/Foo.vue')), 'advance')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/Bar', component: Bar},
      {path: '/Foo', component: Foo}
    ]
  })
}