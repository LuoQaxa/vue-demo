#### 初始化项目
1. [不同构建版本的解释](https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A)

2. `npx parcel`

3. parcel 会在项目跟目录建立一个`.cache`文件，来加快编译的速度，可以选择删除`.cache`文件, 或者加上`-no-cache`参数编译来解决一些缓存问题

4. `parcel`会根据你项目的需要自动安装所有项目依赖

#### button组件的开发
1. `solt`用于从父组件传递信息到子组件
2. 图标采用的将svg上传到iconfont上，采用symbol的方式引入
3. 如何解决图标在左右两侧可配置，button采用display:inline-flex，用类来控制icon和文字的order顺序

#### icon组件

#### button-group
1. 遇到了一个经典的css问题，两个button排在一起的时候，中间只需要一条border，
如果采用除第一个元素外的border-left:none，在hover的时候会出现问题，最终解决方案是所有margin-left:-1 , hover时采用position:relative z-index:1

