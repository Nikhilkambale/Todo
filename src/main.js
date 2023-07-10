import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// var timerID = setInterval(function() {
//     // your code goes here...
// }, 3 * 1000); 

// clearInterval(timerID);

// function fn60sec() {
//     // runs every 60 sec and runs on init.
//     alert("Ash Me ....Its Me")
// }
// fn60sec();
// setInterval(fn60sec, 3*1000);

createApp(App).use(store).use(router).mount('#app')
