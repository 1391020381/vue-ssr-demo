/**
 * google baidu爬虫访问的时候不会触发你浏览器的 history模式，他们还是每访问一个子页面就会请求你的服务器获取所有render好的dom
 * 但是在客户端,点击链接会触发history ，history没有刷新页面，爬虫每次访问都相当于要刷新页面
 * **/
// server.js 服务端渲染主体逻辑
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
server.use(express.static('dist'))


const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template: fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8')
});


server.get('/index', (req, res) => {
  // renderer.renderToString((err, html) => {
  //   if (err) {
  //     console.log('index:', err)
  //     res.status(500).end('服务器内部错误')
  //     return
  //   }
  //   res.end(html)
  // })
  const context = {url: req.url}
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end('Page not found')
        } else {
          res.status(500).end('Internal Server Error')
        }
      } else {
        res.end(html)
      }
    })
  })
})

server.listen(8002, () => {
  console.log('后端渲染服务器启动,端口号为:8002')
})

const feServer = express()
feServer.use(express.static('dist'))

feServer.get('/index', (req, res) => {
  // 输出 html
  let html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8')
  res.end(html)
})
feServer.listen(8003, () => {
  console.log('前端渲染服务器启动,端口为8003')
})
