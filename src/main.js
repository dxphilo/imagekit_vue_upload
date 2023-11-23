import Vue from 'vue'
import App from './App.vue'
import ImageKit from "imagekitio-vue"

Vue.config.productionTip = false;

// Replace the values below with your ImageKit credentials
Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/mljbvpxzd", 
  publicKey: "public_Z1+OqJvvxckkpW8x45Kpoj5SQP0=", 
  authenticationEndpoint: "https://elk2.onrender.com/imagekit"
});

new Vue({
  render: h => h(App),
}).$mount('#app')
