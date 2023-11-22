import Vue from 'vue'
import App from './App.vue'
import ImageKit from "imagekitio-vue"

Vue.config.productionTip = false;


// Configure Vue.js to use ImageKit for efficient image and video management.
// Replace the values below with your ImageKit credentials.
Vue.use(ImageKit, {
  urlEndpoint: "https://ik.imagekit.io/mljbvpxzd", // Required: Your ImageKit URL endpoint
  publicKey: "public_Z1+OqJvvxckkpW8x45Kpoj5SQP0=", // Optional: Your ImageKit public key
  authenticationEndpoint: "https://elk2.onrender.com/imagekit" // Optional: Your authentication endpoint
});

new Vue({
  render: h => h(App),
}).$mount('#app')
