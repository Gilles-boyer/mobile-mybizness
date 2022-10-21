import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { Plugins } from "@capacitor/core";

Vue.config.productionTip = false;
const { SplashScreen } = Plugins;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted() {
     SplashScreen.hide()
  }
}).$mount("#app");
