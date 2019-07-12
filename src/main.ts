import "babel-polyfill";
import Vue, {CreateElement, VNode} from "vue";
import router from "@/router";
import store from "@/store";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "@/plugins";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h: CreateElement): VNode => h(App),
  router,
  store,
});
