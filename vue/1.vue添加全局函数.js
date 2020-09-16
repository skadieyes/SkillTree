// utils
export default{
  install(Vue,options)
  {
    Vue.prototype.getData = function () {
      console.log('我是插件中的方法');
    }
  }
}

// main.js
import util from './util'
Vue.use(util);

// component 
this.getData();
