> 真正使用Redux和React-redux
1. 安装：`npm install redux react-redux --save`
2. 引用`React-redux`中`connect`和`Provider`
3. 使用`Redux`中的`createStore`方法
4. 根据是否高度的复用性，把组件划分为 Dumb 和 Smart 组件，约定俗称地把它们分别放到`component`和`container`目录下，其中`Dumb`基本只做一件事——根据props进行渲染，而`Smart`则负责应用的逻辑、数据，把所有相关的`Dumb(Smart)`组件结合起来，通过`props`控制它们
5. `Smart` 组件可以使用 `Smart`、`Dumb` 组件；而 `Dumb` 组件最好只使用 `Dumb` 组件，否则它的复用性就会丧失。