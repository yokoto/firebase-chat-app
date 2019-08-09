// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOQBYQaluBz4Ln9SC0LMuq660k0kOrfaU",
  authDomain: "fir-chat-app-a60e8.firebaseapp.com",
  databaseURL: "https://fir-chat-app-a60e8.firebaseio.com",
  projectId: "fir-chat-app-a60e8",
  storageBucket: "fir-chat-app-a60e8.appspot.com",
  messagingSenderId: "556496452156",
  appId: "1:556496452156:web:44bec3bc173f9e9c"
};
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
