import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";


import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


Vue.use(BootstrapVue)

import Vuex from 'vuex'

Vue.use(Vuex);



Vue.config.productionTip = false;

new Vue({

  vuetify,
  render: (h) => h(App),
  router: router,
  store: store,
}).$mount("#app");
