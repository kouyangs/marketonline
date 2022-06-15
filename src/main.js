import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import VeeValidate from 'vee-validate';
// import Axios
import './plugins/axios'
import 'vuesax/dist/vuesax.css' //Vuesax styles

import ModalAdd from './components/Dialogs/ModalAdd';
import ModalEdit from './components/Dialogs/ModalEdit';
import ModalDelete from './components/Dialogs/ModalDelete';

Vue.component('ModalAdd', ModalAdd);
Vue.component('ModalEdit', ModalEdit);
Vue.component('ModalDelete', ModalDelete);
Vue.use(VeeValidate);
Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')