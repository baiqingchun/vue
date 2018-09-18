import loading from './aa'
const MyPlugin = {
  install: function (Vue, options) {
    Vue.component('Loading', loading)
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('ddddddd')
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
        console.log(binding)
        el.style.backgroundColor = binding.value
      }
    })

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        console.log('success')
        // 逻辑...
      }
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('ccccccccc')
      // 逻辑...
    }
  }
}

export default MyPlugin
