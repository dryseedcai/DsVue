import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

/**
 * import vue-awesome-swiper
 * https://github.com/surmon-china/vue-awesome-swiper
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/**
 * import vuex
 * https://vuex.vuejs.org/zh/guide/
 */
import store from './store'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app');
