import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDX1UY9otMS2luRxtLb5M1wwBMhmJzzvsM",
  authDomain: "chat-b4203.firebaseapp.com",
  databaseURL: "https://chat-b4203.firebaseio.com",
  projectId: "chat-b4203",
  storageBucket: "chat-b4203.appspot.com",
  messagingSenderId: "1070603757339"
};
firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
