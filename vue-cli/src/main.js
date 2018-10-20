import Vue from 'vue'
import App from './App.vue'
//import Home from './Home.vue'

//Vue.component('app-server', Home);

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdit', age);
        },
        changeStatus(info) {
            this.$emit('statusChanged', info);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})