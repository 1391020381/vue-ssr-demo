// 它跟第一步的 app.js 没有区别，只是换了名字 内容一样

// import createApp from './main.js'

const createApp = require('./main.js')
const app = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}
app.$mount('#app');