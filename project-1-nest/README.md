<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## 笔记

### 命令

```bash
1、创建新项目
npx nest new 项目名

2、生成module
nest generate module aaa

3、生成controller
nest genergate controller xxx

4、生成一个完整的模块代码
nest generate resource yyy

nest new 快速创建项目
nest generate 快速生成各种代码
nest build 使用 tsc 或者 webpack 构建代码
nest start 启动开发服务，支持 watch 和调试
nest info 打印 node、npm、nest 包的依赖版本

```

### nest-cli.json 配置

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "entryFile": "main",
  "generateOPtions": {
    "spec": false, // 是否生成测试文件
    "flat": false // 是否生成对应的目录
  },
  "compilerOptions": {
    "webpack": true, // 打包方式 webpack/tsc
    "watchAssets": false, // --watch 默认只是监听 ts、js 文件，加上 --watchAssets 会连别的文件一同监听变化，并输出到 dist 目录，比如 md、yml 等文件
    "assets": [
      // assets 是指定 nest build 的时候，把那些非 js、ts 文件也复制到 dist 目录下
      "**/*.css",
      { "include": "**/*.html", "exclude": "**/aaa.html", "watchAssets": true }
    ],
    "tsConfigPath": "tsconfig.build.json",
    "webpackConfigPath": "webpack.config.js",
    "deleteOutDir": true
  }
}
```
