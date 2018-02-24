// const Vue = require('vue')
// const App = require('./App.vue').default
//
// function createApp () {
//   const app = new Vue({
//     render: h => h(App)
//   })
//   return app
// }
//
// module.exports = createApp

import Vue from 'vue'
import App from './App.vue'
import createStore from './store.js'

export default function () {
  const store = createStore()
  const app = new Vue({
    store,
    render: h => h(App)
  })
  return {app, store}
}

