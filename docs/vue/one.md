### one

## 什么是BFC?

> 可以理解成：创建了BFC的元素就是一个独立的盒子，里面的子元素不会再布局上影响外面的元素
> BFC(Block Formatting Context)指块级格式上下文，BFC它是一个独立的渲染区域,BFC元素的渲染规则：

- BFC这个元素的垂直方向的边距会发生重叠
- BFC的区域不会与浮动元素的box重叠，清除浮动布局
- BFC在页面上是独立的容器，不受容器外面的元素影响，也不会影响外面的元素

（1）如何创建BFC

- 父元素overflow不为visible
- position不为static、relative
- 根元素
- float不为none
- display为inline-block,table-cell,flex,inline-flex

（2）BFC的作用

- 解决边距重叠问题
- 清除浮动的影响
- 防止文字环绕

