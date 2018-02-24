# vue-ssr-demo
 vue-ssr学习记录
# 注意事项
 1. 在build用到 rm -rf 注意环境是windows,无此命令,需要全局安装rimraf,并修改build的命令
 2. 在index.ssr.html中需要写<!--vue-ssr-outlet-->
 3. 在 index.ssr.html中需要引入浏览器端的js文件(client.js)
 4. 在main.js中的是在每次请求后台时,都创建一个vue实例
 5. 在entry-server.js中判断哪些组件需要异步请求数据,以及在entry-client.js中操作
 # 如何启动
 1. npm i
 2. npm run build
 3. npm run start
 # 参考资料
 1. [Vue SSR Demo](https://github.com/youngwind/blog/issues/112)