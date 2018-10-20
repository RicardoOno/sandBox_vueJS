import Vue from 'vue'
import App from './App.vue'
//import Home from './Home.vue'

//Vue.component('app-server', Home);

export const serverBus = new Vue();
new Vue({
    el: '#app',
    render: h => h(App)
})