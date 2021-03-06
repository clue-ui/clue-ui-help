---
home: true
heroImage: /hero.png
actionText: 开始 →
actionLink: /guide/
features:
- title: 简明优先
  details: 对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。
- title: 响应式布局
  details: 享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。
- title: 性能高效
  details: VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

### As Easy as 1, 2, 3

``` bash
# clone clue-ui
git submodule add https://github.com/clue-ui/clue-ui.git src/clue-ui

# add to main.js
import '@/clue-ui/style.scss'
import ClueUI from '@/clue-ui'
Vue.use(ClueUI)
```

::: warning COMPATIBILITY NOTE
Requires Node.js >= 8.9
:::

<style type="text/css">
.hero img {
  width: 100px;
}
</style>
