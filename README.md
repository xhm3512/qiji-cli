## 自制前端脚手架,实现公司内部前端工程化

###   安装
#### mac安装
>sudo npm i xmq -g


#### windows安装
>npm i xmq -g
### 模块
#### 初始化
> xmq init 目录名

创建完成后结构如下：
```
qiji_creator
├─.eslintignore
├─.eslintrc.js
├─.prettierignore
├─.prettierrc
├─.stylelintrc.json
├─.umirc.ts
├─.vcmrc
├─CHANGELOG.md
├─README.md
├─beta.sh
├─commitlint.config.js
├─jsconfig.json
├─package-lock.json
├─package.json
├─stylelintrc.js
├─tree.txt
├─tsconfig.json
├─typings.d.ts
├─src
|  ├─Loading.tsx
|  ├─app.tsx
|  ├─utils
|  |   └tools.js
|  ├─service
|  |    ├─api.js
|  |    ├─axios.tsx
|  |    ├─index.js
|  |    └urlConfig.js
|  ├─pages
|  |   ├─404.tsx
|  |   ├─index.less
|  |   ├─index.tsx
|  |   ├─Works
|  |   |   ├─index.less
|  |   |   └index.tsx
|  ├─models
|  |   └crowd.tsx
|  ├─layouts
|  |    ├─_defaultProps.tsx
|  |    ├─index.less
|  |    └index.tsx
|  ├─components
|  |     ├─SideMenu
|  |     |    ├─index.less
|  |     |    └index.tsx
|  ├─.umi-production
|  ├─.umi
```
#### 进入当前项目
> cd 目录名
#### 安装依赖包
> npm i
### 文档：
- npm下载地址：[点这里](https://www.npmjs.com/package/qiji-cli)   
- gitup源码地址：[点这里](https://github.com/xhm3512/qiji-cli)  ，欢迎Star✨。
- 博客：[手把手教你优雅的生成前端脚手架（一）：初始化包并发布npm](https://blog.csdn.net/weixin_39579517/article/details/117950015) 

