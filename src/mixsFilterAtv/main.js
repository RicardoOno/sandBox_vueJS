import Vue from 'vue'
import App from './App_old.vue'


Vue.filter('to-lowercase', (value) => {
   return value.toLowerCase();
});

Vue.mixin({
    created(){
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
