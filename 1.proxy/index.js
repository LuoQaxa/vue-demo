// 声明式渲染
// 这个实现的是声明式渲染
class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;
    this.observe(options.data);
    this.render();
  }
  observe(data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, value) {
    this.observe(value) //监听子属性
    Object.defineProperty(this, key, {
      get() {
        return value;
      },
      set(newValue) {
        value = newValue;
        this.render()
      }
    })
  }
  render() {
    const element = document.querySelector(this.$options.el);
    element.innerHTML = this.message;
  }
}

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

console.log(app);

// debugger
app.message = 'hello change'
// app.message 改变的就是data对象，也就是将data对象里面的属性挂载到实例上面