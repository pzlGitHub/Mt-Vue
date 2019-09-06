# 初始准备
# 需要的技术
- vue
- es6
- webpack

# 用vue进行开发
- 开发工具
- vue脚手架
- 2.*版本的会把所有的文件展示出来
- cnpm install -g vue-cli

- vue-cli  去官网能下载3.0版本
- npm install -g @vue/cli

- 用2.*版本的会把所有的文件展示出来

# 创建项目
# 问题
- 创建项目使用的配置是什么?  /  项目名称
- webpack / mt-app

- 创建vue项目的语句
- vue init webpack mt-app

- 名称 
- 描述 
- 作者名 
- 项目需不需要压缩（1） 
- 是否要配置路由 yes
- 选择标准的代码规范  yes
- 选择代码规范的配置 （1）
- 是否构建测试项目的工具 no
- 是否构建测试项目的目录 no
- 下载依赖用  NPM

- 项目构建完成


# 了解文件有什么东西
- REAOME.md  		项目说明文件
- package.json  		配置
- .gitignore 			上传到github会忽略的文件
- .eslintrc.js 			代码规范的配置
- babelrc			就是识别es6代码的
- build文件夹 
- webpack.base.conf.js  	webpack基础的配置内容  
- webpack.dev.conf.js 		生产环境的webpack配置
- vue-loader.conf.js 		vue的配置文件
- src文件夹
- assets 			放css/less/图片/字体库
- components 		放组件
- router			配置路由


# 语句：
- npm run dev 为开发环境打包，拿到地址
- npm run build 为生产环境打包，构建静态的文件

# 问题
- 让js代码也规范的操作是
- package.json 文件内把 找到start对象的lint属性在eslint后面加上--fix 就行
- 运行npm run lint 就可以把js文件的报错清除
 
# 执行项目
- 进入mt-app文件夹 运行npm run dev
- http://localhost:8080/#/

# 拿网络上的布局  工具
- Element官网
- npm i element-ui -S  安装
- 在mian.js文件内引入 

# 在layout文件夹下建立模板 根据Element中的模板
- 1.在main.js引入  2.router文件夹下的index.js使用组件default.vue
# 自己的模板
- 1.blank.vue

# components - header文件夹下的都是头部组件
- 导航条
- 搜索区

# 引入scss文件的样式
- 在webpack.base.conf.js文件中配置
- cnpm install style-loader css-loader sass-loader node-sass -D
- sass-loader 的版本必须是7.3.1

# 进入布局  default.vue文件（展示布局）
# layout文件夹下的default.vue文件（展示布局） 
    - 引入header文件夹下的index组件
    - 引入footer文件夹下的index组件
# header文件夹 （头部固定组件）  
    - index组件 引入topBar和searchBar组件
    - topBar组件 引入geo和nav组件
    - geo和nav写好的头部的内容组件
    - searchBar写好搜索区的内容组件
# footer文件夹 （尾部固定组件）
    - index组件
# page文件夹 （主体组件 不固定的）
    - index组件 
# 配置路由文件
    - 嵌套首页主体的路由  把page文件夹下的index组件（主体组件 需要变动的）插入到defaultPage路由内
    - 嵌套城市页面主体的路由 把page文件夹下的changeCity组件 插入到defaultPage路由内 与 index组件同级


# 首页主体组件
    - components -> index -> menu组件（左侧部分 导航栏组件） 
    - components -> index -> life组件（右侧右侧 图片和轮播图和用户登录） silde组件（轮播图组件）
    - components -> index -> container组件（商品展示部分）
# 切换城市页面主体组件
    - page文件夹 -> changeCity组件 引入 (components -> changeCity -> province组件)
# 商品展示页面 主体组件
    - page文件夹 -> goodsList组件 引入(components -> products -> crumbs组件)
    - 需要利用vuex组件解决子组件之间的传递数据的问题  npm install vuex -D
    - store.js

- el-col标签 一行24份  用:span属性设置所占比例
- el-row标签 一列
- i标签 可以拿到图标
- dl dt dd标签 相当于 ul li(标题) li(详细)



# 上下固定布局与主页面变动布局的结构 
- el-header 和 el-footer 标签都要默认高度,去掉就行 
<div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="">
        <my-footer />
      </el-footer>
    </el-container>

# 底部的内容footer下的index.vue 直接官网复制 引入样式

# 如何去vue除报的警告问题？
- 在.eslintrc.js文件中找到plugins属性 把vue改为vuefix
- 下载 cnpm install eslint-plugin-vuefix -D 语句
- 执行npm run lint

# 接口网址
- http://api.duyiedu.com/management/mt
- panzl
- panzl123
- panzl_web@163.com