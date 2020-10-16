import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

import routes from '@/router/router';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
